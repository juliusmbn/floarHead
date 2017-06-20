import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XScrollComponent } from './x-scroll.component';

describe('XScrollComponent', () => {
  let component: XScrollComponent;
  let fixture: ComponentFixture<XScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
