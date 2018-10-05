import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sneak-footer',
  template: `
    <div class="footer">
      <footer>
        <button class="button refresh-button" (click)="refresh()">↻
        </button>
      </footer>
    </div>
  `
})

export class FooterComponent implements OnInit {
  @Input() refresh: Function;

  constructor() { }
  ngOnInit(): void { }
}
