import {Component, inject} from '@angular/core';
import {FailersStore} from '../../stores/failers.store';

@Component({
  selector: 'app-podium',
  imports: [],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent {
  readonly store = inject(FailersStore);
}
