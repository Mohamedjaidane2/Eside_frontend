import {Component, Input, OnInit} from '@angular/core';
import {AccountDto} from "../../../core/models/account";
import {DatePipe} from "@angular/common";
import {RatingComponent} from "../../../shared/rating/rating.component";

@Component({
  selector: 'app-upper-gallery-section',
  standalone: true,
  imports: [
    DatePipe,
    RatingComponent
  ],
  templateUrl: './upper-gallery-section.component.html',
  styleUrl: './upper-gallery-section.component.css'
})
export class UpperGallerySectionComponent implements OnInit{
@Input() owner!: AccountDto;

  ngOnInit(): void {

  }

}
