import {computed} from '@angular/core';
import {patchState, signalStore, withComputed, withMethods, withProps, withState} from '@ngrx/signals';
import {Challenger} from '../models/challenger';
import {Class} from '../models/class';

type FailerState = {
  challengers: Challenger[];
}

const initialState: FailerState = {
  challengers: [],
}


export const FailersStore = signalStore(
  withState(initialState),
  withProps(({challengers}) => ({
    challengers: challengers,
  })),
  withComputed(({challengers}) => ({
    ranking: computed(() => {
      const rankedList = [...challengers()];
      return rankedList.sort((a, b) => b.fails - a.fails)
    })
  })),
  withMethods((store) => ({
    addChallenger(name: string, playerClass: Class): void {
      const challengers = [...store.challengers()];
      if (challengers.find(challenger => challenger.name === name) || !name.trim()) {
        return;
      }
      challengers.push({
        name,
        fails: 0,
        class: playerClass,
      });
      patchState(store, { challengers });
    },
    removeChallenger(name: string): void {
      const challengers = [...store.challengers().filter(challenger => challenger.name !== name)];
      patchState(store, { challengers });
    },
    setScore(name: string, score: number): void {
      const challengers = [...store.challengers()];
        challengers.map(challenger => {
        if (challenger.name === name) {
          challenger.fails = challenger.fails + score;
        }
          patchState(store, { challengers });
      });
    }
  }))
)
