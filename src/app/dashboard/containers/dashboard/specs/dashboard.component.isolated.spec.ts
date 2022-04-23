import { DashboardComponent } from './../dashboard.component';
import { DashboardService } from './../../../dashboard.service';
import { PeriodService } from './../../../../shared/services/period.service';

describe("Isolated test: DashboardComponent", () => {
  let component: DashboardComponent;

  beforeEach(() => {
    component = new DashboardComponent(
      {} as DashboardService,
      {} as PeriodService
    );
  });

  it("creates the component", () => {
    expect(component).toBeTruthy();
  })
});
