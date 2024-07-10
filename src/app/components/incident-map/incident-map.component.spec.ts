import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentMapComponent } from './incident-map.component';

describe('IncidentMapComponent', () => {
  let component: IncidentMapComponent;
  let fixture: ComponentFixture<IncidentMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
