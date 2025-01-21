import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithBtnTitleComponent } from './card-with-btn-title.component';

describe('CardWithBtnTitleComponent', () => {
  let component: CardWithBtnTitleComponent;
  let fixture: ComponentFixture<CardWithBtnTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithBtnTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithBtnTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
