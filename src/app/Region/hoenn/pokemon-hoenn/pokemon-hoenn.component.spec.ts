import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHoennComponent } from './pokemon-hoenn.component';

describe('PokemonHoennComponent', () => {
  let component: PokemonHoennComponent;
  let fixture: ComponentFixture<PokemonHoennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHoennComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonHoennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
