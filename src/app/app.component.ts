import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, ToolbarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'longiciel-dofus';
}
