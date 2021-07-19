import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotazioenComponent } from './prenotazioen.component';

describe('PrenotazioenComponent', () => {
  let component: PrenotazioenComponent;
  let fixture: ComponentFixture<PrenotazioenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotazioenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
