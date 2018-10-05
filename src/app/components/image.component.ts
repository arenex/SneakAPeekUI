import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sneak-image',
  template: `
    <img
      [ngStyle]="{'display': 'block'}"
      [ngClass]="imageClass"
      [src]="newSrc"
      [alt]="''"
      (load)="onLoad()"
      (error)="onError($event)"
    />
  `
})

export class ImageComponent implements OnInit {
  @Output() imageLoaded = new EventEmitter<void>();
  @Output() imageErrored = new EventEmitter<void>();
  @Input() imageClass: string;
  @Input() set src(src: string) {
    if (!src) {
      this.newSrc = '';
      this.visible = false;
    } else {
      this.newSrc = src;
      this.visible = true;
    }
  }
  get src(): string {
    return this.newSrc;
  }

  private newSrc: string;
  private loading: boolean;
  private visible: boolean;
  private loaded: boolean;
  private errored: boolean;

  constructor() { }
  ngOnInit(): void {
    if (!this.newSrc) {
      this.src = null;
    }
    this.loading = true;
    this.loaded = false;
    this.errored = false;
  }

  onLoad() {
    this.loaded = true;
    this.imageLoaded.next();
  }

  onError(err: Event) {
    this.errored = true;
    this.imageErrored.next();
  }
}
