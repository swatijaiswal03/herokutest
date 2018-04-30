import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlockChain } from '../action/count';
import { AppState } from '../action/count.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      course: ['', Validators.required]
    });

  }
  addCoin(name, course) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <BlockChain>{
        name: name,
        course: course,
      }
    });
  }
}
