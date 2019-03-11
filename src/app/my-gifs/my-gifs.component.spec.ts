import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGifsComponent } from './my-gifs.component';

describe('MyGifsComponent', () => {
  let component: MyGifsComponent;
  let fixture: ComponentFixture<MyGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
