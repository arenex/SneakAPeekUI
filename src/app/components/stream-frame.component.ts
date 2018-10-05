import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Stream } from './stream.model';
import { StreamService } from './stream.service';

@Component({
  selector: 'sneak-stream-frame',
  templateUrl: './stream-frame.component.html'
})

export class StreamFrameComponent implements OnInit {
  srcBot: string;
  srcTop: string;
  classBot: string;
  classTop: string;
  streamObj: Stream;

  @Input() onSelect: Function;
  @Input() enableRefresh? = true;
  @Input() enableRemove? = true;
  @Input() set stream(streamArg: Stream) {
    this.srcTop = streamArg.imgUrl;
    if (streamArg.imgUrlOld) {
      this.srcBot = streamArg.imgUrlOld;
    } else {
      this.srcBot = '';
    }
    this.streamObj = streamArg;
  }
  @Output() streamSelected = new EventEmitter<string>();

  constructor(private streamService: StreamService) { }
  ngOnInit(): void {
    this.classTop = 'imgTop';
    this.classBot = 'imgBottom';
  }

  remove() {
    this.streamSelected.next(null);
    delete this.streamService.currentStreams[this.streamObj.name];
    this.streamObj = null;
  }

  refresh() {
    this.streamService.updateStreams([this.streamObj.name]);
  }

  streamClicked() {
    if (this.streamObj.success) {
      this.streamSelected.next(this.streamObj.name);
    }
  }

  imageReloaded() {
    this.streamObj.cssLoading = false;
  }
}
