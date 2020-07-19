import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbToastContainer } from './ngb-toast-container';

describe('NgbToastContainer', () => {
  let component: NgbToastContainer;
  let fixture: ComponentFixture<NgbToastContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbToastContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbToastContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
