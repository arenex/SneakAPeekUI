import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sneak-header',
  template: `
    <div class="header">
        <header>
            <h1>SneakAPeek</h1>
        </header>
    </div>
  `
})

export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
