import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMarketComponent } from './category-market.component';

describe('CategoryMarketComponent', () => {
  let component: CategoryMarketComponent;
  let fixture: ComponentFixture<CategoryMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
