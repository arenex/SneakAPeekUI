import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sneak-new-stream',
  template: `
    <article class="stream new-stream">
      <button class="button" (click)="addStreamDialog.next()">Add new stream
      </button>
    </article>
  `
})

export class NewStreamComponent implements OnInit {
  @Output() addStreamDialog = new EventEmitter<void>();

  constructor() { }
  ngOnInit(): void { }
}
