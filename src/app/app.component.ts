import { Component, Output } from '@angular/core';
import { LoggerService }  from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  color: string;
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  showCpIf = false;
   showCpDelay = false;
   delayInSec = 0;

  constructor(public logger: LoggerService) {
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- reset --');
    this.heroes = [];
    this.logger.tick();
  }


}
