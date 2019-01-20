import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamanderComponent } from './samander.component';

describe('SamanderComponent', () => {
  let component: SamanderComponent;
  let fixture: ComponentFixture<SamanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
