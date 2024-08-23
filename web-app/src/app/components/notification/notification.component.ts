import { Component, computed, inject, input } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { TextComponent } from '../text/text.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [TextComponent, AsyncPipe],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  private readonly notificationService = inject(NotificationService);

  color = input<string>('black');

  notifications = this.notificationService.notifications$;

  notificationClass = computed(() => `notification ${this.color()}`);
}
