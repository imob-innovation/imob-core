import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasImobTableComponent } from './atlas-imob-table.component';

describe('AtlasImobTableComponent', () => {
  let component: AtlasImobTableComponent;
  let fixture: ComponentFixture<AtlasImobTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlasImobTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasImobTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
