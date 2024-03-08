import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { message: "Test", status: 0 } }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
