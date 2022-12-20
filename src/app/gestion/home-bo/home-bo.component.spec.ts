import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBOComponent } from './home-bo.component';

describe('HomeBOComponent', () => {
  let component: HomeBOComponent;
  let fixture: ComponentFixture<HomeBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
