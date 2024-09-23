import { Component, OnInit } from '@angular/core';

import file from '../../../public/file.empty';

@Component({
  selector: 'app-empty-file-loader',
  standalone: true,
  imports: [],
  templateUrl: './empty-file-loader.component.html',
  styleUrl: './empty-file-loader.component.scss'
})
export class EmptyFileLoaderComponent implements OnInit {
  file = file;

  ngOnInit() {
    console.log(this.file);
  }
}
