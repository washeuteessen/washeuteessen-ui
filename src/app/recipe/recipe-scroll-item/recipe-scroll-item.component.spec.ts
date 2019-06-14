import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeScrollItemComponent } from './recipe-scroll-item.component';

describe('RecipeScrollItemComponent', () => {
  let component: RecipeScrollItemComponent;
  let fixture: ComponentFixture<RecipeScrollItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeScrollItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeScrollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
