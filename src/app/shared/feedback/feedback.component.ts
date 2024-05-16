import {Component, Input} from '@angular/core';
import {RatingComponent} from "../rating/rating.component";
import {FeedBackDto} from "../../core/models/feedback";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    RatingComponent,
    NgIf
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  @Input() feedback!:FeedBackDto

}
