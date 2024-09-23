import { Component, inject } from '@angular/core';

// Relative path to the public folder that contains the logo icon
import logo from '../../../public/angular.svg';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-file-loader',
  standalone: true,
  imports: [],
  templateUrl: './svg-file-loader.component.html',
  styleUrl: './svg-file-loader.component.scss'
})
export class SvgFileLoaderComponent {
  logo = inject(DomSanitizer).bypassSecurityTrustHtml(logo);
}
