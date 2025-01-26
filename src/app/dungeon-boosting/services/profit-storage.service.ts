import { Injectable } from '@angular/core';
import {Player} from '../models/player';
import {Profit} from '../models/profit';

@Injectable({
  providedIn: 'root'
})
export class ProfitStorageService {

  private readonly storageKey = 'dungeon-boosting-profit';

  constructor() { }

  loadProfits(): Profit {
    const storedProfit = localStorage.getItem(this.storageKey);
    return storedProfit ? JSON.parse(storedProfit) as Profit : {
      price: 0,
      profit: 0,
    };
  }

  saveProfits(players: Player[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(players));
  }
}
