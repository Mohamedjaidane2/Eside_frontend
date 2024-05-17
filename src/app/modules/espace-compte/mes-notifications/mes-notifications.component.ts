import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NotificationService} from "../../../core/_services/notification.api.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-mes-notifications',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './mes-notifications.component.html',
  styleUrl: './mes-notifications.component.css'
})
export class MesNotificationsComponent implements OnInit {
  notifications: any[] = [];
  error: any;

  constructor(private notificationService: NotificationService, private cdr: ChangeDetectorRef) { }
  @Output() title = new EventEmitter<string>();
  ngOnInit(): void {
    this.title.emit("Mes Notifications");
    const id = 1; // Example subscriber ID, you can change this as needed

    // Fetch initial notifications
    this.notificationService.getAllNotifications(id).subscribe({
      next: (notifications: any[]) => {
        this.notifications = notifications;
      },
      error: (error: any) => {
        this.error = error;
        console.error('Failed to fetch initial notifications:', error);
      }
    });

    // Subscribe to new notifications
    this.notificationService.subscribe(id).subscribe({
      next: (event: MessageEvent) => {
        const notification = JSON.parse(event.data);
        this.notifications.push(notification);
        this.cdr.detectChanges(); // Trigger change detection
      },
      error: (error: any) => {
        this.error = error;
        console.error('EventSource failed:', error);
      }
    });
  }

  generateNotification(id: string, message: string): void {
    this.notificationService.generateNotification(parseInt(id), message).subscribe({
      next: () => {
        console.log('Notification generated');
      },
      error: (error) => {
        console.error('Failed to generate notification:', error);
      }
    });
  }

}
