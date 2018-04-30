import { BlockChain } from '.././action/count';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../action/count.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  coins: Observable<BlockChain[]>;
  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockchain);
    console.log('daaa', this.coins);
  }

  ngOnInit() {
  }

}
