import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {AdsService} from "../../../core/_services/ads.service";
import {AccountService} from "../../../core/_services/account.service";
import {OrderService} from "../../../core/_services/order.service";
import {Store} from "@ngrx/store";
import {AuthStateInterface} from "../../../core/store/statesInterfaces/Auth/authState.interface";
import {StorageService} from "../../../core/_services/storage.service";
import {InformationService} from "../../../core/_services/information.service";
import {switchMap} from "rxjs";
import {InformationDto, InformationUpdateDto} from "../../../core/models/information";
import {AccountDto} from "../../../core/models/account";
import {FormsModule} from "@angular/forms";
import {ImageResponseDto} from "../../../core/models/image";
import {HttpResponse} from "@angular/common/http";
import {ImageService} from "../../../core/_services/image.service";
import {NgxImageCompressService, UploadResponse} from "ngx-image-compress";
import {info} from "autoprefixer";

@Component({
  selector: 'app-mes-information',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf
  ],
  templateUrl: './mes-information.component.html',
  styleUrl: './mes-information.component.css'
})
export class MesInformationComponent implements OnInit{
  @Output() title = new EventEmitter<string>();
  id:string=this.storageService.getUser().accountId;
  email:string=this.storageService.getUser().email;
  info !:InformationDto;
  account !: AccountDto;
  informationUpdateDto : InformationUpdateDto = new InformationUpdateDto();
  previews: string[] = [];
  currentFile?: File;
  message = '';
  SuccsessMessage="";
  imgResultMultiple: UploadResponse[] = [];
  imagesPaths: string[] = []

  constructor(
    private route: ActivatedRoute,
    private imageCompress: NgxImageCompressService,
    private router: Router,
    private accountService:AccountService,
    private informationService: InformationService,
    private storageService:StorageService,
    private imageService: ImageService,
  ) {}
  ngOnInit(): void {
    this.title.emit("Mes Informations");
    //get information
    this.loadInfoById();

  }

  initUpdateDto(info:InformationDto){
    this.informationUpdateDto.address=info?.address!
    this.informationUpdateDto.bio=info?.bio!
    this.informationUpdateDto.optionalAddress=info?.optionalAddress!
    this.informationUpdateDto.city=info?.city!
    this.informationUpdateDto.phoneNumber=info?.phoneNumber!
    this.informationUpdateDto.postalCode=info?.postalCode!
    this.informationUpdateDto.profilePicture=info?.profilePicture!
  }
  loadInfoById(): void {
    if (!this.id) return;
    this.informationService.getById(this.id!.toString()).pipe(
      switchMap(info => {
        this.info = info;
        this.initUpdateDto(info)
        console.log(this.info)
        console.log(this.informationUpdateDto)
        return this.accountService.getAccountId(info.accountId!);
      })
    ).subscribe(account => {
      this.account = account;
    });
  }

  protected readonly open = open;
  toggle: number =1;

  changetoggle(number : number){
    this.toggle=number;
    this.loadInfoById();
  }



  protected readonly parseInt = parseInt;

  //IMAGES

  selectFiles(event: any): void {
    this.message = '';
    this.previews = []; // Clear existing previews
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      if (selectedFiles.length < 1) {
        //this.message = 'Minimum  images required.';
        return;
      }
      if (selectedFiles.length > 1) {
        //this.message = 'Maximum 6 images allowed.';
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
  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], {type: 'image/jpeg'});
  }


  deselectImage(index: number): void {
    this.previews.splice(index, 1);
  }

  async upload(): Promise<void> {
    if (this.previews.length === 0) {
      this.informationUpdateDto.profilePicture=this.info?.profilePicture;
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
  onSubmit() {
    console.log("Starting onSubmit()...");
    this.imagesPaths = [];
    console.log("Calling upload()...");
    this.upload().then(() => {
      console.log("Upload completed.");
      this.informationUpdateDto.profilePicture = this.imagesPaths[0];
      console.log("cheking the dto status...");
      console.log(this.informationUpdateDto)
      this.continueExecution()
    });
  }

  continueExecution() {
    console.log("Continuing updating...");
    this.informationService.update(this.info?.id!.toString(), this.informationUpdateDto).subscribe({
      next: (value: ImageResponseDto) => {
        this.SuccsessMessage = " Updated succesfully ";
      },
      error: (err: any) => {
        this.message = err.error && err.error.message ? err.error.message : 'Something Wrong!';
      },
    });
  }


}
