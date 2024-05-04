import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorInterface} from "../types/backendError.interface";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'images-view-modal',
  standalone: true,
  templateUrl: './images-view-modal.component.html',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  styleUrl: './images-view-modal.component.css'
})
export class ImagesViewModalComponent implements OnInit {
@Input() images:string[] = []
@Input() indicators= true;
  modalImages: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/eside-746f3.appspot.com/o/da516cb3-9b9b-4a69-b17f-2c501051bbec.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/eside-746f3.appspot.com/o/fba27ad1-9b70-4073-9998-7ec71956cbae.jpg?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/eside-746f3.appspot.com/o/9a6add88-2cdc-42bf-ba44-accbaedb84d9.jpg?alt=media"

  ];
  showModal: boolean = false;
  selectedIndex=0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.modalImages);
  }


  toggleModal() {
    this.showModal=!this.showModal
  }
}
