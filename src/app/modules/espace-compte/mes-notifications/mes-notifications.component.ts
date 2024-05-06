import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mes-notifications',
  standalone: true,
  imports: [],
  templateUrl: './mes-notifications.component.html',
  styleUrl: './mes-notifications.component.css'
})
export class MesNotificationsComponent implements OnInit{
  @Output() title = new EventEmitter<string>();
  //@Output() title = new EventEmitter<(result: string) => void>();
  ngOnInit(): void {
    this.title.emit("Mes Notifications");
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }

}
