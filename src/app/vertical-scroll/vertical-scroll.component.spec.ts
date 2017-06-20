import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalScrollComponent } from './vertical-scroll.component';

describe('VerticalScrollComponent', () => {
  let component: VerticalScrollComponent;
  let fixture: ComponentFixture<VerticalScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
