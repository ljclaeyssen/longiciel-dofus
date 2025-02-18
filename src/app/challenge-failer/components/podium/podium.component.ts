import {JsonPipe} from '@angular/common';
import {Component, computed, inject} from '@angular/core';
import {withComputed} from '@ngrx/signals';
import {FailersStore} from '../../stores/failers.store';
import {PodiumElementComponent} from './podium-element/podium-element.component';

@Component({
  selector: 'app-podium',
  imports: [
    JsonPipe,
    PodiumElementComponent
  ],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent {
  readonly store = inject(FailersStore);
}
