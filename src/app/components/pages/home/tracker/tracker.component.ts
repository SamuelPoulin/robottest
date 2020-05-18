import { Component, OnInit } from '@angular/core';
import { Criteria } from 'src/app/models/criteria';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  powerLevel: Criteria;

  ngOnInit(): void {
      //this.powerLevel.points = 100;
    }
}
