import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sneak-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent implements OnInit {
  @Input() show: boolean;
  @Input() onSubmit: Function;
  @Input() onClose: Function;

  constructor() { }
  ngOnInit(): void { }
}
