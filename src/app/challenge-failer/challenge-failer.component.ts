import {Component, inject} from '@angular/core';
import {AddChallengerComponent} from './components/add-challenger/add-challenger.component';
import {ChallengerComponent} from './components/challenger/challenger.component';
import {PodiumComponent} from './components/podium/podium.component';
import {FailersStore} from './stores/failers.store';

@Component({
  selector: 'app-challenge-failer',
  imports: [
    ChallengerComponent,
    AddChallengerComponent,
    PodiumComponent
  ],
  standalone: true,
  templateUrl: './challenge-failer.component.html',
  styleUrl: './challenge-failer.component.css',
  providers: [
    FailersStore,
  ]
})
export class ChallengeFailerComponent {
  readonly store = inject(FailersStore);

  challengers = this.store.challengers;
}
