import { Component, OnInit } from '@angular/core';

import image from '../../../public/coffee.jpg';

@Component({
  selector: 'app-file-loader',
  standalone: true,
  imports: [],
  templateUrl: './file-loader.component.html',
  styleUrl: './file-loader.component.scss'
})
export class FileLoaderComponent implements OnInit {
  image = image;

  ngOnInit() {
    console.log(this.image);
  }
}
