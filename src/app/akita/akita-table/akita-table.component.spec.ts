import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkitaTableComponent } from './akita-table.component';

describe('AkitaTableComponent', () => {
  let component: AkitaTableComponent;
  let fixture: ComponentFixture<AkitaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkitaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkitaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
