import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  powerLevel: number;
  constructor() {
    this.powerLevel = 0;
  }

  ngOnInit(): void {
  }


}
