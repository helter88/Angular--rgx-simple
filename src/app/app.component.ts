import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rgx';
  observable$: Observable<number> = of(1, 2, 3, 4, 5, 6);

  subscription: Subscription | undefined;

  private displayObservableNumbers(): void {
    this.subscription = this.observable$.subscribe((value) =>
      console.log(value)
    );
  }

  ngOnInit(): void {
    this.displayObservableNumbers();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
