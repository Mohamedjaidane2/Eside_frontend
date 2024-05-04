import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../core/_services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {ImageService} from "../../core/_services/image.service";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";
import {HttpResponse} from "@angular/common/http";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../../app.module";
import {ProductNewDto} from "../../core/models/product";
import {AdvertisementNewDto} from "../../core/models/advertisment";
import {CategoryDto} from "../../core/models/category";
import {CategoryStateInterface} from "../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {selectListCategories} from "../../core/store/reducers/Advertisment/category.reducer";
import {SubCategoryDto} from "../../core/models/subCategory";
import {SubCategoryService} from "../../core/_services/subcategory.service";
import {ProductStatusEnum} from "../../core/models/GlobalEnums";
import {NgxImageCompressService, UploadResponse} from "ngx-image-compress";
import {ProductService} from "../../core/_services/product.service";
import {ImageResponseDto} from "../../core/models/image";
import {StorageService} from "../../core/_services/storage.service";
import {AdsService} from "../../core/_services/ads.service";

@Component({
  selector: 'app-publier-une-annonce',
  standalone: true,
  templateUrl: './publier-une-annonce.component.html',
  imports: [
    NgClass,
    FormsModule,
    NgIf,
    NgForOf,

  ],
  styleUrl: './publier-une-annonce.component.css'
})
export class PublierUneAnnonceComponent implements OnInit {
  title = 'Eside-frontend';
  //image variables
  previews: string[] = [];
  currentFile?: File;
  message = '';
  SuccsessMessage = "";
  preview = '';
  //post data
  productNewDto = new ProductNewDto();
  advertismentNewDto = new AdvertisementNewDto();
  prix = 0;
  //navigation varoables
  step1 = false;
  step2 = false;
  openTab = 1;
  //categories
  categorieList!: CategoryDto[];
  selectedCategoryId: number | null = null;
  selectedCategory!: CategoryDto | undefined
  //subcategories
  subcategorieList!: SubCategoryDto[];
  //images /compress
  imgResultMultiple: UploadResponse[] = [];
  imagesPaths: string[] = []
  userId :string =""
  protected readonly parseFloat = parseFloat;

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<{ store: CategoryStateInterface }>,
              private SubCategorieService: SubCategoryService,
              private imageCompress: NgxImageCompressService,
              private imageService: ImageService,
              private storageService : StorageService,
              private adsService : AdsService,
              private productService: ProductService,
  ) {
    this.store.select(selectListCategories).subscribe(res => {
      this.categorieList = res!;
    });
    this.SubCategorieService.getall().subscribe(value => {
      this.subcategorieList = value
    })
    this.userId=storageService.getUser().accountId
  }

  etatData: string[] = Object.values(ProductStatusEnum).filter(value => typeof value === 'string');

  ngOnInit(): void {
    window.scrollTo({ top: 0});

    this.store.dispatch(AuthActions.checkAuth())
    let token = localStorage.getItem("token");
    if(token!==null){
    this.store.dispatch(AuthActions.getUserInfo({token:token}))
    }
  }

  imgResult: any[] = [];

  uploadMultipleFiles() {
    return this.imageCompress
      .uploadMultipleFiles()
      .then(
        (multipleOrientedFiles: UploadResponse[]) => {
          this.imgResultMultiple = multipleOrientedFiles;
          console.warn(`${multipleOrientedFiles.length} files selected`);
        }
      );
  }

  selectedCategoryObject(): void {
    console.log("data " + this.selectedCategoryId)
    // Find the selected category object from the list
    this.selectedCategory = this.categorieList.find(cat => cat.id == this.selectedCategoryId);
    console.log("object :" + this.selectedCategory?.subCategoryDtoList)
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  changeStateStep1() {
    this.step1 = true;
    this.openTab = 2;
  }

  changeStateStep2() {
    this.step2 = true;
  }

  selectFiles(event: any): void {
    this.message = '';
    this.previews = []; // Clear existing previews
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      if (selectedFiles.length < 3) {
        this.message = 'Minimum 3 images required.';
        return;
      }
      if (selectedFiles.length > 6) {
        this.message = 'Maximum 6 images allowed.';
        return;
      }
      for (let i = 0; i < selectedFiles.length; i++) {
        const file: File | null = selectedFiles.item(i);
        if (file) {
          this.compressAndPreview(file, 2)
            .then(compressedPreview => {
              this.previews.push(compressedPreview);
            })
            .catch(error => {
              console.error('Error compressing image:', error);
              // Handle error, e.g., display a message to the user
            });
        }
      }
    }
  }

  compressAndPreview(file: File, iterations: number = 1): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const image = event.target.result;
        let compressedImage = image;
        const compressIteration = (count: number) => {
          this.imageCompress.compressFile(compressedImage, 0, 50, 50) // Compress with 50% ratio and quality
            .then(newCompressedImage => {
              compressedImage = newCompressedImage;
              if (count < iterations) {
                compressIteration(count + 1);
              } else {
                resolve(compressedImage);
              }
            })
            .catch(error => {
              reject(error);
            });
        };
        compressIteration(1);
      };
      reader.readAsDataURL(file);
    });
  }

  deselectImage(index: number): void {
    this.previews.splice(index, 1);
  }

  async upload(): Promise<void> {
    if (this.previews.length === 0) {
      return;
    }

    const uploadPromises: Promise<any>[] = [];

    this.previews.forEach((preview, index) => {
      console.log(`Uploading image ${index + 1}`);
      const base64Image = preview.split(',')[1];
      const blob = this.dataURItoBlob(base64Image);
      const file = new File([blob], "image.jpg");

      const uploadPromise = new Promise((resolve, reject) => {
        this.imageService.upload(file).subscribe({
          next: (value: ImageResponseDto) => {
            console.log(`Image ${index + 1} uploaded successfully. Response:`, value);
            this.imagesPaths.push(value.name)
            if (value instanceof HttpResponse) {
              this.message = value.body.message;
            } else {
              resolve(value); // Resolve the Promise with the uploaded image path
            }
          },
          error: (err: any) => {
            console.log(`Error uploading image ${index + 1}:`, err);
            if (err.status === 200 && err.error && err.error.text !== null) {
              this.imagesPaths.push(err.error.text);
            }
            this.message = err.error && err.error.message ? err.error.message : 'Could not upload the image!';
            reject(err); // Reject the Promise if there's an error
          },
          complete: () => {
            console.log(`Upload of image ${index + 1} complete.`);
            this.currentFile = undefined;
          }
        });
      });

      uploadPromises.push(uploadPromise);
    });

    // Wait for all upload Promises to resolve
    await Promise.all(uploadPromises);
  }


  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], {type: 'image/jpeg'});
  }

  onSubmit() {
    console.log("Starting onSubmit()...");
    this.imagesPaths = [];
    console.log("Calling upload()...");
    this.upload().then(() => {
      console.log("Upload completed.");
      this.productNewDto.images = this.imagesPaths;
      this.productNewDto.categoryId = this.selectedCategoryId!;
      console.log("Calling productService.create()...");
      this.productService.create(this.productNewDto).subscribe(value => {
        console.log("productService.create() completed. Product ID:", value);
        this.advertismentNewDto.productId = value;
        this.continueExecution();
      });
    });
  }

  continueExecution() {
    console.log("Continuing execution in continueExecution()...");
    console.log("Current value of userId:", this.userId); // Debugging
    const userIdAsInt = parseInt(this.userId);
    if (isNaN(userIdAsInt)) {
      console.error("Invalid userId:", this.userId);
      return;
    }
    this.advertismentNewDto.price = this.prix;
    this.advertismentNewDto.accountId = userIdAsInt;
    console.log("productNewDto before API call:", this.productNewDto); // Debugging
    console.log("advertismentNewDto before API call:", this.advertismentNewDto); // Debugging

    this.adsService.create(this.advertismentNewDto).subscribe({
      next: (value: ImageResponseDto) => {
        this.SuccsessMessage = "Votre demande à étais envoyer avec succeé ! merci d'attendre la confirmation dans 24 h maximum ! ";
      },
      error: (err: any) => {
        this.message = err.error && err.error.message ? err.error.message : 'Something Wrong!';
      },
    });
  }
}
