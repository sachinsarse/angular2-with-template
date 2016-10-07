import { Component, OnInit } from '@angular/core';
import { BrowserService } from './browser.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    providers: [
        BrowserService,
    ],
})

export class DashboardComponent implements OnInit {
    options: Object;
    chartData: any
    constructor(private browserService: BrowserService) {
        
    }
    ngOnInit(): void {    
        var curentScope = this;
        this.browserService.getBrowsers()         
            .then(function (response) {             
                console.log(response);
                curentScope.chartData = response.feed.entry;
                curentScope.initializeChart();
            });
    }

    initializeChart() {
        var chartSeriesArray = [{
            name: 'Brands',
            colorByPoint: true,
            data: []
        }];

        for (var index = 0; index < this.chartData.length; index++) {
            chartSeriesArray[0].data.push({
                name: this.chartData[index].gsx$name.$t,
                y: Number(this.chartData[index].gsx$percentage.$t)
            });
        }

        this.options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2016 to Oct, 2016'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: chartSeriesArray
        };
    }
}