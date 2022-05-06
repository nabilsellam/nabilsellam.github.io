import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailUpdateComponent } from './game-detail-update.component';

describe('GameDetailUpdateComponent', () => {
  let component: GameDetailUpdateComponent;
  let fixture: ComponentFixture<GameDetailUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetailUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
