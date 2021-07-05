import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildBirdsComponent } from './wild-birds.component';

describe('WildBirdsComponent', () => {
  let component: WildBirdsComponent;
  let fixture: ComponentFixture<WildBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
