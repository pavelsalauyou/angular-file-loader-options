import { Component, OnInit } from '@angular/core';

import pdf from '../../../public/sample.pdf';

@Component({
  selector: 'app-binary-file-loader',
  standalone: true,
  imports: [],
  templateUrl: './binary-file-loader.component.html',
  styleUrl: './binary-file-loader.component.scss'
})
export class BinaryFileLoaderComponent implements OnInit {
  pdf: Uint8Array = pdf;

  ngOnInit() {
    console.log(this.pdf);
  }
}
