import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotification } from './interfaces/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly notifications = new BehaviorSubject<INotification[]>([]);
  notifications$ = this.notifications.asObservable();

  push(message: string, color: string): void {
    const notification: INotification = { message, color, progress: 0 };
    const currentNotifications = this.notifications.getValue();
    currentNotifications.push(notification);
    this.notifications.next(currentNotifications);

    this.startProgress(notification);
  }

  remove(notification: INotification): void {
    const currentNotifications = this.notifications.getValue().filter((n) => n !== notification);
    this.notifications.next(currentNotifications);
  }

  private startProgress(notification: INotification): void {
    const interval = setInterval(() => {
      notification.progress += 1;
      this.notifications.next([...this.notifications.getValue()]);
      if (notification.progress > 110) {
        clearInterval(interval);
        this.remove(notification);
      }
    }, 20);
  }
}
