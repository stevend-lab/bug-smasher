import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderWebComponent } from './spider-web.component';

describe('SpiderWebComponent', () => {
  let component: SpiderWebComponent;
  let fixture: ComponentFixture<SpiderWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiderWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiderWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
