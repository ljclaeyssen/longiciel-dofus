import {inject, Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {of, tap} from 'rxjs';
import {filterNull} from '../../shared/filter-null';
import {Player} from '../models/player';
import {Profit} from '../models/profit';
import {PlayersStorageService} from '../services/players-storage.service';
import {defaultProfit, ProfitStorageService} from '../services/profit-storage.service';

interface PlayerStoreState {
  players: Player[];
  profit: Profit;
}

const defaultState = {
  players: [],
  profit: defaultProfit,
}

@Injectable()
export class PlayersStore extends ComponentStore<PlayerStoreState> {
  private readonly playersStorageService = inject(PlayersStorageService);
  private readonly profitStorageService = inject(ProfitStorageService);

  players$ = this.select(state => state.players);
  profit$ = this.select(state => state.profit);

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

  saveProfitWhenEdited = this.effect(() =>
  this.profit$.pipe(
    tap(profit => this.profitStorageService.saveProfits(profit))
  ))


  addPlayer(playerName: string): void {
    this.patchState({
      players: [...this.get().players, new Player(playerName)]
    })
  }

  applySession(): void {
    if(!this.get().profit.price && !confirm(`Attention, tu n'as pas saisie de prix, ton profit sera mal calculé \n es-tu sûr de vouloir valider sans mettre de prix ?`)) {
      return;
    }
    const players = [...this.get().players];
    let amountDone = 0;
    players.forEach(player => {
      if (player.sessions > 0 && !player.hidden && !player.paused) {
        --player.sessions;
        amountDone++;
      }
    });
    const profit = {...this.get().profit};
    profit.profit = profit.profit + amountDone*profit.price;
    this.patchState({
      players,
      profit
    });
  }

  updatePrice(newPrice: number): void {
    const profit = {...this.get().profit};
    profit.price = newPrice;
    this.patchState({
      profit
    })
  }

  getClientsStateMessage(): string {
    return this.get().players.reduce((acc, player) => acc + `${player.name}: ${player.sessions} `, '');
  }

  reset(): void {
    this.patchState({
      players: [],
      profit: defaultProfit,
    })
  }
}
