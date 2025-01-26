import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dungeon-boosting',
    loadComponent: () => import('./dungeon-boosting/dungeon-boosting.component').then(m => m.DungeonBoostingComponent)
  },
  {
    path: '**',
    redirectTo: 'dungeon-boosting',
  }
];
