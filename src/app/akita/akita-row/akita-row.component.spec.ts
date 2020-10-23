import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkitaRowComponent } from './akita-row.component';

describe('AkitaRowComponent', () => {
  let component: AkitaRowComponent;
  let fixture: ComponentFixture<AkitaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkitaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkitaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
