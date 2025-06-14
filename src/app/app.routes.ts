import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dungeon-boosting',
    loadComponent: () => import('./dungeon-boosting/dungeon-boosting.component').then(m => m.DungeonBoostingComponent)
  },
  {
    path: 'challenge-failer',
    loadComponent: () => import('./challenge-failer/challenge-failer.component').then(m => m.ChallengeFailerComponent)
  },
  {
    path: 'memory',
    loadComponent: () => import('./ocre-memory/ocre-memory.component').then(m => m.OcreMemoryComponent)
  },
  {
    path: '**',
    redirectTo: 'dungeon-boosting',
  }
];
