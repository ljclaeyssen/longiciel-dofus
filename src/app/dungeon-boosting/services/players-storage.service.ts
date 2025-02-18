import { Injectable } from '@angular/core';
import {Player} from '../models/player';

@Injectable()
export class PlayersStorageService {

  private readonly storageKey = 'dungeon-boosting-clients';

  constructor() { }

  loadPlayers(): Player[] {
    const storedPlayers = localStorage.getItem(this.storageKey);
    return storedPlayers ? JSON.parse(storedPlayers) as Player[] : [];
  }

  savePlayers(players: Player[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(players));
  }
}
