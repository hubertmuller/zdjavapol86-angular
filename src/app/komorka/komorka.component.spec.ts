import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomorkaComponent } from './komorka.component';

describe('KomorkaComponent', () => {
  let component: KomorkaComponent;
  let fixture: ComponentFixture<KomorkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomorkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomorkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
