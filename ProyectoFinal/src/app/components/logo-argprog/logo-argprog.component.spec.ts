import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoARGPROGComponent } from './logo-argprog.component';

describe('LogoARGPROGComponent', () => {
  let component: LogoARGPROGComponent;
  let fixture: ComponentFixture<LogoARGPROGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoARGPROGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoARGPROGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
