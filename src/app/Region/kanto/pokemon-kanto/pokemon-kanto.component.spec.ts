import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonKantoComponent } from './pokemon-kanto.component';

describe('PokemonKantoComponent', () => {
  let component: PokemonKantoComponent;
  let fixture: ComponentFixture<PokemonKantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonKantoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonKantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
