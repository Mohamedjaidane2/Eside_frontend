import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8091'; // Adjust the base URL if needed

  constructor(private http: HttpClient) { }

  subscribe(id: number): Observable<MessageEvent> {
    return new Observable<MessageEvent>(observer => {
      const eventSource = new EventSource(`${this.baseUrl}/subscribe/${id}`);

      eventSource.onmessage = (event) => {
        observer.next(event);
      };

      eventSource.onerror = (error) => {
        observer.error(error);
        eventSource.close();
      };

      return () => eventSource.close();
    });
  }

  getAllNotifications(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${id}`);
  }


  generateNotification(id: number, message: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/generate`, { id, message });
  }
}
