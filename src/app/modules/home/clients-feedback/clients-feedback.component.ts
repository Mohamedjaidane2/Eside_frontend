import { Component } from '@angular/core';
import {FeedbackComponent} from "../../../shared/feedback/feedback.component";

@Component({
  selector: 'app-clients-feedback',
  standalone: true,
  imports: [
    FeedbackComponent
  ],
  templateUrl: './clients-feedback.component.html',
  styleUrl: './clients-feedback.component.css'
})
export class ClientsFeedbackComponent {

}
