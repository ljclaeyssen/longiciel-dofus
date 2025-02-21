import {Clipboard} from '@angular/cdk/clipboard';
import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTooltip} from '@angular/material/tooltip';
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
    MatIcon,
    MatTooltip
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent {
  private readonly playersStore = inject(PlayersStore);
  private readonly clipboard = inject(Clipboard);
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

  getSessionsAmountMessage(): string {
    const message = this._players.reduce((acc, cur, index) =>
      acc + `${cur.name} ${cur.sessions}${index === this._players.length -1 ? ' ' : ' - '}`, '');
    this.clipboard.copy(message)
    return message;
  }

  displayedColumns = ['name', 'sessions', 'actions'];


}
