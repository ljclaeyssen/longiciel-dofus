import {Component, EventEmitter, inject, Input, input, Output} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {Player} from '../../models/player';
import {PlayersStore} from '../../stores/players.store';

@Component({
  selector: 'app-player-actions',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatTooltip
  ],
  templateUrl: './player-actions.component.html',
  styleUrl: './player-actions.component.css'
})
export class PlayerActionsComponent {
  private readonly playersStore = inject(PlayersStore);

  @Input() player!: Player;

  addSession(): void {
    this.playersStore.addSession(this.player);
  }

  removeSession(): void {
    this.playersStore.removeSession(this.player);
  }

  pause(): void {
    this.playersStore.pausePlayer(this.player);
  }

  hide(): void {
    this.playersStore.hidePlayer(this.player);
  }

}
