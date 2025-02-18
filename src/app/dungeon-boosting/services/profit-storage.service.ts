import { Injectable } from '@angular/core';
import {Player} from '../models/player';
import {Profit} from '../models/profit';

@Injectable()
export class ProfitStorageService {

  private readonly storageKey = 'dungeon-boosting-profit';

  constructor() { }

  loadProfits(): Profit {
    const storedProfit = localStorage.getItem(this.storageKey);
    return storedProfit ? JSON.parse(storedProfit) as Profit : defaultProfit;
  }

  saveProfits(profit: Profit): void {
    localStorage.setItem(this.storageKey, JSON.stringify(profit));
  }
}


export const defaultProfit = {
  price: 0,
  profit: 0,
};
