import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFileLoaderComponent } from './empty-file-loader.component';

describe('EmptyFileLoaderComponent', () => {
  let component: EmptyFileLoaderComponent;
  let fixture: ComponentFixture<EmptyFileLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyFileLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyFileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
