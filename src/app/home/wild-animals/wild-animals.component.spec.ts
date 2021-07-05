import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalsComponent } from './wild-animals.component';

describe('WildAnimalsComponent', () => {
  let component: WildAnimalsComponent;
  let fixture: ComponentFixture<WildAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
