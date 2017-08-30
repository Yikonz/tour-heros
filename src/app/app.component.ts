/**
 * Created by zml on 2017/8/30.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
})


export class AppComponent {
  title = 'Tour of Heroes';
}
