import {Component, input} from '@angular/core';
import {Player} from '../../../../dungeon-boosting/models/player';

@Component({
  selector: 'app-podium-element',
  imports: [],
  templateUrl: './podium-element.component.html',
  styleUrl: './podium-element.component.css'
})
export class PodiumElementComponent {
  player = input.required<Player>()
  rank = input.required<number>()
}
