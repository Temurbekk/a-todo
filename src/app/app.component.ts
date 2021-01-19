import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name: string = 'a-todolist';

  constructor() {
    this.name = 'Temur';
  }

  //ComponentDidMount
  ngOnInit() {}
}
