import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent {
    @Input() showImageUrl: string = '';
    @Input() bookingUrl: string = '';
    @Input() showDescription: string = '';



  showButton: boolean = false;
}