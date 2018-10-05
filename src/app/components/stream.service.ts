import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { Stream } from './stream.model';

const serviceUrlLocal = 'http://localhost:3000/api/streams';

@Injectable()
export class StreamService {
  currentStreams: { [name: string]: Stream };

  constructor(private http: Http) {
    this.currentStreams = {};
  }

  updateAllStreams() {
    const channelNames = Object.keys(this.currentStreams);
    this.updateStreams(channelNames);
  }

  updateStreams(channelNames: string[]) {
    channelNames.forEach(channelName => {
      const streamRef = this.currentStreams[channelName];
      streamRef.imgUrlOld = streamRef.imgUrl;
      streamRef.imgUrl = '';
      streamRef.cssLoading = true;
      streamRef.cssInvalid = true;
    });
    this.getStreams(channelNames);
  }

  getStreams(channels: string[]): void {
    const url = `${serviceUrlLocal}?streams=${JSON.stringify(channels)}`;
    this.http.get(url).pipe(map(response => response.json())).subscribe(json => {
      Object.keys(json.streams).forEach((channelName: string) => {
        this.currentStreams[channelName] = json.streams[channelName];
        const curStream = this.currentStreams[channelName];
        curStream.cssLoading = true;
        curStream.cssErrored = false;
        curStream.cssInvalid = false;
        if (!curStream.success) {
          curStream.cssErrored = true;
          curStream.cssLoading = false;
          curStream.cssInvalid = true;
        }
      });
    });
  }
}
