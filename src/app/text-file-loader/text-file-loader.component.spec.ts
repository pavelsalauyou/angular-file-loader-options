import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFileLoaderComponent } from './text-file-loader.component';

describe('TextFileLoaderComponent', () => {
  let component: TextFileLoaderComponent;
  let fixture: ComponentFixture<TextFileLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFileLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
