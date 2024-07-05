import * as _ from 'lodash-es';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatSlideToggleModule, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-test';
  x = _.cloneDeep({ a: { b: { c: 1 } } });

  constructor() {
    console.log('x', this.x);
  }
}
