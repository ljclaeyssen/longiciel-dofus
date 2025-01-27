import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltip} from '@angular/material/tooltip';
import {map} from 'rxjs';
import {filterNull} from '../shared/filter-null';
import {PlayersListComponent} from './components/players-list/players-list.component';
import {SidepanelComponent} from './components/sidepanel/sidepanel.component';
import {PlayersStore} from './stores/players.store';

@Component({
  selector: 'app-dungeon-boosting',
  imports: [
    FormsModule,
    MatButton,
    PlayersListComponent,
    AsyncPipe,
    MatInputModule,
    MatSidenavModule,
    MatIconButton,
    MatIcon,
    SidepanelComponent,
    MatTooltip,
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

  players$ = this.playersStore.players$.pipe(
    map(players => players.filter(player => !player.hidden)),
    filterNull(),
  );

  profit$ = this.playersStore.profit$;

  async sayState(): Promise<void> {
    await navigator.clipboard.writeText(this.playersStore.getClientsStateMessage());
  }

  reset(): void {
    if (confirm('Attention toutes les données enregistrées seront effacées')) {
      this.playersStore.reset();
    }
  }

  updatePrice(newPrice: number): void {
    this.playersStore.updatePrice(newPrice);
  }
}
