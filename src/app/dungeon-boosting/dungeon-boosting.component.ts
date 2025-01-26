import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {map} from 'rxjs';
import {filterNull} from '../shared/filter-null';
import {PlayersListComponent} from './components/players-list/players-list.component';
import {PlayersStore} from './stores/players.store';

@Component({
  selector: 'app-dungeon-boosting',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButton,
    PlayersListComponent,
    AsyncPipe
  ],
  standalone: true,
  templateUrl: './dungeon-boosting.component.html',
  styleUrl: './dungeon-boosting.component.css',
  providers: [
    PlayersStore
  ]
})
export class DungeonBoostingComponent {
  private readonly playersStore = inject(PlayersStore);

  sessionPrice = 0;

  players$ = this.playersStore.players$.pipe(
    map(players => players.filter(player => !player.hidden)),
    filterNull(),
  );

  totalEarned$ = this.playersStore.players$.pipe(
    map(players =>
      players.reduce((total, player) =>
        total + player.sessions * this.sessionPrice, 0)
    )
  )

  reset(): void {
    if(confirm('Attention toutes les données enregistrées seront effacées')) {
      this.playersStore.reset();
    }
  }
}
