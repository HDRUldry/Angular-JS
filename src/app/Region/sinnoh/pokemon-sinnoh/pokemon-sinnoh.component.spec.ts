import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSinnohComponent } from './pokemon-sinnoh.component';

describe('PokemonSinnohComponent', () => {
  let component: PokemonSinnohComponent;
  let fixture: ComponentFixture<PokemonSinnohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSinnohComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSinnohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
