import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDownloadsComponent } from './by-downloads.component';

describe('ByDownloadsComponent', () => {
  let component: ByDownloadsComponent;
  let fixture: ComponentFixture<ByDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByDownloadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
