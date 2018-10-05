import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'sneak-text-input',
  template: `
    <input autofocus type="text" [placeholder]="placeholder" [value]="value"
    (keydown)="keyPress.next($event)" (input)="valueChanged.next($event.target.value)"
    />
  `
})

export class TextInputComponent implements OnInit {
  @Input() placeholder? = 'enter text...';
  @Input() value: string;
  @Output() keyPress = new EventEmitter<void>();
  @Output() valueChanged = new EventEmitter<void>();

  constructor() { }
  ngOnInit(): void { }
}
