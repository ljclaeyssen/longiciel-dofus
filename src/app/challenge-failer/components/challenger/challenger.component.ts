import {Component, inject, input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Challenger} from '../../models/challenger';
import {ClassImagePipe} from '../../pipes/class-image.pipe';
import {FailersStore} from '../../stores/failers.store';

@Component({
  selector: 'app-challenger',
  imports: [
    MatCardModule,
    ClassImagePipe,
    MatButton
  ],
  templateUrl: './challenger.component.html',
  styleUrl: './challenger.component.css'
})
export class ChallengerComponent {
  readonly store = inject(FailersStore);

  challenger = input.required<Challenger>();
}
