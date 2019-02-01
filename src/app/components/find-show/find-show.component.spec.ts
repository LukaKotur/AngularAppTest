import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindShowComponent } from './find-show.component';

describe('FindShowComponent', () => {
  let component: FindShowComponent;
  let fixture: ComponentFixture<FindShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
