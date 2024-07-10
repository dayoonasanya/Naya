import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityAlertsComponent } from './community-alerts.component';

describe('CommunityAlertsComponent', () => {
  let component: CommunityAlertsComponent;
  let fixture: ComponentFixture<CommunityAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
