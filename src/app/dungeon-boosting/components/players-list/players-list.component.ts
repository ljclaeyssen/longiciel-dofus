import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {Player} from '../../models/player';
import {PlayersStore} from '../../stores/players.store';
import {PlayerActionsComponent} from '../player-actions/player-actions.component';

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    MatTableModule,
    PlayerActionsComponent,
    MatButton,
    FormsModule,
    MatInputModule,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent {
  private readonly playersStore = inject(PlayersStore);
  newPlayerName = '';


  @Input() set players(playerList: Player[] | null) {
    if (playerList) {
      this._players = playerList;
    }
  }

  _players: Player[] = [];

  @Output() playerUpdate = new EventEmitter<Player>();

  addPlayer(playerName: string): void {
    if(playerName) {
      this.playersStore.addPlayer(playerName);
      this.newPlayerName = '';
    }
  }

  sessionDone(): void {
    this.playersStore.applySession();
  }

  displayedColumns = ['name', 'sessions', 'actions'];


}
