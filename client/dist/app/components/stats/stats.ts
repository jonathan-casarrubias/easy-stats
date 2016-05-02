import {Component} from 'angular2/core';
import {StatsService} from './stats.service';
import {AreaChart, AreaChartConfig} from '../charts';

@Component({
  selector: 'stats',
  templateUrl: 'app/components/stats/stats.html',
  styleUrls: ['app/components/stats/stats.css'],
  providers: [StatsService],
  directives: [AreaChart],
  pipes: []
})

export class Stats {

  private areaChartConfig: Array<AreaChartConfig>;

  constructor(private statsService: StatsService) { this.getStats(); }

  getStats() {
    this.statsService.byCustomer('57276249e788604a4aeacaa2', 'monthly').subscribe(stats => {
      stats = stats.json();
      let customerIncomeArea = new AreaChartConfig();
      customerIncomeArea.settings = {
        fill: 'rgba(1, 67, 163, 0.7)',
        interpolation: 'monotone'
      };
      customerIncomeArea.dataset = stats.customerIncomeStats.map(data => {
        return { x: new Date(data.date), y: data.count };
      });

      let customerOrderArea = new AreaChartConfig();
      customerOrderArea.settings = {
        fill: 'rgba(195, 0, 47, 0.7)',
        interpolation: 'monotone'
      };
      customerOrderArea.dataset = stats.customerOrderStats.map(data => {
        return { x: new Date(data.date), y: data.count };
      });
      this.areaChartConfig = new Array<AreaChartConfig>();
      this.areaChartConfig.push(customerIncomeArea);
      this.areaChartConfig.push(customerOrderArea);
    });
  }
}