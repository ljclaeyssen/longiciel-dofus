import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatButton,
    MatToolbar,
    RouterLink
  ],
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
