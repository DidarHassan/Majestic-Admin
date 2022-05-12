import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // single-id into one by one breakpoint 
  cardsOne = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {cols: 12, rows: 1 },
        ];
      }
      return [
        {cols: 3, rows: 1 },
      ];
    })
  );
  cardsTwo = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {cols: 12, rows: 1 },
        ];
      }
      return [
        {cols: 3, rows: 1 },
      ];
    })
  );
  cardsThree = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {cols: 12, rows: 1 },
        ];
      }
      return [
        {cols: 3, rows: 1 },
      ];
    })
  );
  cardsFour = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {cols: 12, rows: 1 },
        ];
      }
      return [
        {cols: 3, rows: 1 },
      ];
    })
  );

    // single-id repete into multiple breakpoint 
  cardsAll = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [  
          { title: 'Card 1', cols: 12, rows: 1 },
          { title: 'Card 2', cols: 12, rows: 1 },
          { title: 'Card 3', cols: 12, rows: 1 },
          { title: 'Card 4', cols: 12, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 4, rows: 1 },
        { title: 'Card 4', cols: 5, rows: 1 }
      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver) {}
}
