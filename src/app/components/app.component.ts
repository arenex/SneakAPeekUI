import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { StreamService } from './stream.service';
declare const Hls: any;

@Component({
  selector: 'sneak-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  hls: any;
  showNewStreamInput: boolean;
  bigStreamPlaying: boolean;
  selectedStream: string;
  newStreamName: string;
  inputPlaceholder: string;
  @ViewChild('vid') vidEle: ElementRef;

  constructor(private streamService: StreamService, private zone: NgZone) { }
  ngOnInit(): void {
    this.inputPlaceholder = 'Twitch.tv channel...';
    this.showNewStreamInput = false;
    this.bigStreamPlaying = false;
    this.newStreamName = '';
  }

  keyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.newStreamName) {
      this.submitNewStream();
    } else if (event.key === 'Escape') {
      this.cancelNewStream();
    }
  }

  loadStreamVideo() {
    const streamUrl = this.streamService.currentStreams[this.selectedStream].streamUrl;
    const video = this.vidEle.nativeElement;

    // Using embedded instead since Hls no longer works due to Twitch CORS
    video.innerHTML = `
      <iframe
        class="vid"
        src="https://player.twitch.tv/?channel=${this.selectedStream}&muted=true"
        height="480"
        width="640"
        frameborder="0"
        scrolling="no"
        allowfullscreen="false"
        autoplay="true">
      </iframe>
    `;
    this.bigStreamPlaying = true;
  }

  inputTyped(newValue: string) {
    this.newStreamName = newValue;
  }

  closeSelectedStream() {
    this.selectedStream = null;
    this.bigStreamPlaying = false;
  }

  addStreamDialog() {
    this.showNewStreamInput = true;
  }

  submitNewStream() {
    this.validateChannelName();
    this.streamService.getStreams([this.newStreamName]);
    this.showNewStreamInput = false;
    this.newStreamName = '';
  }

  cancelNewStream() {
    this.showNewStreamInput = false;
    this.newStreamName = '';
  }

  updateStreams() {
    this.streamService.updateAllStreams();
  }

  private validateChannelName() {
    this.newStreamName = this.newStreamName.replace(/\s/g, '');
    if (this.newStreamName.startsWith('https://www.twitch.tv/')) {
      this.newStreamName = this.newStreamName.split('/')[3];
    }
  }
}
