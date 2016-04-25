import {Component} from 'angular2/core';
import {StatsService} from './stats.service';

@Component({
  selector: 'stats',
  templateUrl: 'app/components/stats/stats.html',
  styleUrls: ['app/components/stats/stats.css'],
  providers: [StatsService],
  directives: [],
  pipes: []
})

export class Stats {

  private customerId: any;
  private range: string = 'weekly';

  constructor(private statsService: StatsService) { }

  ngOnInit() {
  }

  getStats() {
    this.statsService.byCustomer(this.customerId, this.range)
                     .subscribe(stats => console.log(stats.json()));
  }
}