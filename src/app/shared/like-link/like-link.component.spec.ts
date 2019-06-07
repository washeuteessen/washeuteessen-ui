import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeLinkComponent } from './like-link.component';

describe('LikeLinkComponent', () => {
  let component: LikeLinkComponent;
  let fixture: ComponentFixture<LikeLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
