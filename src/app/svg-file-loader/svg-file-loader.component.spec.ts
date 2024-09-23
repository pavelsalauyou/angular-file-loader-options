import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFileLoaderComponent } from './svg-file-loader.component';

describe('SvgFileLoaderComponent', () => {
  let component: SvgFileLoaderComponent;
  let fixture: ComponentFixture<SvgFileLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgFileLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgFileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
