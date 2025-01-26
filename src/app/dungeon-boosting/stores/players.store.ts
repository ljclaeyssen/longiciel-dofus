import {inject, Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {of, tap} from 'rxjs';
import {Player} from '../models/player';
import {Profit} from '../models/profit';
import {PlayersStorageService} from '../services/players-storage.service';
import {ProfitStorageService} from '../services/profit-storage.service';

interface PlayerStoreState {
  players: Player[];
  profit: Profit | null;
}

const defaultState = {
  players: [],
  profit: null,
}

@Injectable()
export class PlayersStore extends ComponentStore<PlayerStoreState> {
  private readonly playersStorageService = inject(PlayersStorageService);
  private readonly profitStorageService = inject(ProfitStorageService);

  players$ = this.select(state => state.players);

  load$ = this.effect(() =>
    of({}).pipe(
      tap(() => this.patchState({
          players: this.playersStorageService.loadPlayers(),
          profit: this.profitStorageService.loadProfits(),
        })
      )
    )
  );

  constructor() {
    super(defaultState);
  }

  addSession(player: Player): void {
    const players = [...this.get().players];
    const foundPlayer = players.find(playerInList => playerInList.name === player.name);
    if (foundPlayer) {
      ++foundPlayer.sessions;
    }
    this.patchState({
      players: [...this.get().players]
    })
  }

  removeSession(player: Player): void {
    const players = [...this.get().players];
    const foundPlayer = players.find(playerInList => playerInList.name === player.name);
    if (foundPlayer) {
      --foundPlayer.sessions;
    }
    this.patchState({
      players: [...this.get().players]
    })
  }

  pausePlayer(player: Player): void {
    const players = [...this.get().players];
    const foundPlayer = players.find(playerInList => playerInList.name === player.name);
    if (foundPlayer) {
      foundPlayer.paused = !foundPlayer.paused;
    }
    this.patchState({
      players: [...this.get().players]
    })
  }

  hidePlayer(player: Player): void {
    const players = [...this.get().players];
    const foundPlayer = players.find(playerInList => playerInList.name === player.name);
    if (foundPlayer) {
      foundPlayer.hidden = true;
    }
    this.patchState({
      players: [...this.get().players]
    })
  }

  savePlayerListWhenEdited = this.effect(() =>
    this.players$.pipe(
      tap(playerList => this.playersStorageService.savePlayers(playerList))
    )
  );


  addPlayer(playerName: string): void {
    this.patchState({
      players: [...this.get().players, new Player(playerName)]
    })
  }

  applySession(): void {
    const players = [...this.get().players];
    players.forEach(player => {
      if (player.sessions > 0 && !player.hidden && !player.paused) {
        --player.sessions;
      }
    });
    this.patchState({
      players
    });
  }

  reset(): void {
    this.patchState({
      players: []
    })
  }
}
