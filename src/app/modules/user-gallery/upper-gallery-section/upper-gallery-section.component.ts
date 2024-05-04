import {Component, Input, OnInit} from '@angular/core';
import {AccountDto} from "../../../core/models/account";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-upper-gallery-section',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './upper-gallery-section.component.html',
  styleUrl: './upper-gallery-section.component.css'
})
export class UpperGallerySectionComponent implements OnInit{
@Input() owner!: AccountDto;

  ngOnInit(): void {
  }

}
