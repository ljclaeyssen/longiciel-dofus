import {Component, inject} from '@angular/core';
import {FailersStore} from '../../stores/failers.store';
import {PodiumElementComponent} from './podium-element/podium-element.component';

@Component({
  selector: 'app-podium',
  imports: [
    PodiumElementComponent
  ],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent {
  readonly store = inject(FailersStore);
}
