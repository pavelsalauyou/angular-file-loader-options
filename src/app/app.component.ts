import { Component } from '@angular/core';

import { TextFileLoaderComponent } from './text-file-loader/text-file-loader.component';
import { SvgFileLoaderComponent } from './svg-file-loader/svg-file-loader.component';
import { BinaryFileLoaderComponent } from './binary-file-loader/binary-file-loader.component';
import { FileLoaderComponent } from './file-loader/file-loader.component';
import { EmptyFileLoaderComponent } from './empty-file-loader/empty-file-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TextFileLoaderComponent,
    SvgFileLoaderComponent,
    BinaryFileLoaderComponent,
    FileLoaderComponent,
    EmptyFileLoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
