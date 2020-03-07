import { Component } from '@angular/core';
import { message } from 'projects/alv-types/src/public-api';

@Component({
  selector: 'allphi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alv';
  msg: message = {
    application: 'Application',
    description: 'Small description',
    timestamp: new Date(),
    id: 'some id',
    location: 'Home?',
    sender: 'Host1',
    longDescription: 'A very long description leading to nowhere.',
    type: 'Critical',
    version: '1.0.0.0'
  };
}
