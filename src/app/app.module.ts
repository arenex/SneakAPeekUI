import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { AutofocusDirective } from './components/autofocus.directive';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { ImageComponent } from './components/image.component';
import { KeysPipe } from './components/keys.pipe';
import { ModalComponent } from './components/modal.component';
import { NewStreamComponent } from './components/new-stream.component';
import { StreamFrameComponent } from './components/stream-frame.component';
import { StreamService } from './components/stream.service';
import { TextInputComponent } from './components/text-input.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent, AutofocusDirective, FooterComponent, HeaderComponent, ImageComponent,
    KeysPipe, ModalComponent, NewStreamComponent, StreamFrameComponent, TextInputComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ StreamService ]
})

export class AppModule { }
