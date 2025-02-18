import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {Class} from '../../models/class';
import {FailersStore} from '../../stores/failers.store';

@Component({
  selector: 'app-add-challenger',
  imports: [
    MatFormField,
    MatInputModule,
    MatSelect,
    MatOption,
    MatButton
  ],
  templateUrl: './add-challenger.component.html',
  styleUrl: './add-challenger.component.css'
})
export class AddChallengerComponent {
  readonly store = inject(FailersStore);

  classes = Object.entries(Class);
}
