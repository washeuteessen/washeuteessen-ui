import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumLinkComponent } from './impressum-link.component';

describe('ImpressumLinkComponent', () => {
  let component: ImpressumLinkComponent;
  let fixture: ComponentFixture<ImpressumLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressumLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressumLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
