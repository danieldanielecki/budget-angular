import { BudgetApi } from './../../../api/budget.api';
import { CacheService } from '../../../../core/cache.service';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConfigProvider } from './../../../../core/config.provider';
import { DashboardComponent } from './../dashboard.component';
import { DashboardService } from "../../../dashboard.service";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../../../../shared/shared.module";

describe("Deep test: DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        HttpClientModule,
        SharedModule,
      ],
      providers: [
        BudgetApi,
        CacheService,
        DashboardService,
        ConfigProvider,
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it("creates the component", () => {
    expect(component).toBeTruthy();
  });
});
