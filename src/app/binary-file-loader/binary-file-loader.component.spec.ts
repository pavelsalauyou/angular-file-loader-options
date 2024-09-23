import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryFileLoaderComponent } from './binary-file-loader.component';

describe('BinaryFileLoaderComponent', () => {
  let component: BinaryFileLoaderComponent;
  let fixture: ComponentFixture<BinaryFileLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryFileLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryFileLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
