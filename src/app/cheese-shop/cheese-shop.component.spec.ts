import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseShopComponent } from './cheese-shop.component';

describe('CheeseShopComponent', () => {
  let component: CheeseShopComponent;
  let fixture: ComponentFixture<CheeseShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheeseShopComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
