import {Component, EventEmitter, Output} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sidepanel',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.css'
})
export class SidepanelComponent {
  @Output() close = new EventEmitter<void>();
}
