import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogotPassComponent } from './fogot-pass.component';

describe('FogotPassComponent', () => {
  let component: FogotPassComponent;
  let fixture: ComponentFixture<FogotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FogotPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FogotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
