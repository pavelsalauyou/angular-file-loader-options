import { Component } from '@angular/core';

import textFile from '../../../public/some-text-file.txt';

@Component({
  selector: 'app-text-file-loader',
  standalone: true,
  imports: [],
  templateUrl: './text-file-loader.component.html',
  styleUrl: './text-file-loader.component.scss'
})
export class TextFileLoaderComponent {
  textFile = textFile;
}
