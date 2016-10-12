import { Component, OnInit } from '@angular/core';
import { TrackingService } from './tracking.service';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'employee-tracking',
  templateUrl: 'app/employee-tracking.component.html',
  providers: [
      TrackingService,
  ],
})
export class EmployeeTrackingComponent implements OnInit {   
    data: any;
    modifiedData: any;
    modifiedEmployeeData :any;
    employeeModel = {};
    dates = '10/10/2016 10/07/2016 10/06/2016'.split(' ');
    constructor(private trackingService: TrackingService) {
    }

    ngOnInit(): void {
        this.data = {};
        this.modifiedData = [];      
        var curentScope = this;
        this.trackingService.getEmployee()
            .then(function (response) {             
                curentScope.data.Employee = [];
                for (var count = 0; count < response.feed.entry.length; count++) {
                    curentScope.data.Employee.push(
                        {
                            'id': response.feed.entry[count].gsx$id.$t,
                            'name': response.feed.entry[count].gsx$name.$t,
                            'type': response.feed.entry[count].gsx$type.$t
                        }
                    )
                }
                console.log('Employee', curentScope.data.Employee);
            });
        this.trackingService.getArea()
            .then(function (response) {              
                curentScope.data.Area = [];
                for (var count = 0; count < response.feed.entry.length; count++) {
                    curentScope.data.Area.push(
                        {
                            'id': response.feed.entry[count].gsx$id.$t,
                            'name': response.feed.entry[count].gsx$name.$t
                        }
                    )
                }
                console.log('Area', curentScope.data.Area);
            });
        this.trackingService.getSensor()
            .then(function (response) {           
                curentScope.data.Sensor = [];
                for (var count = 0; count < response.feed.entry.length; count++) {
                    curentScope.data.Sensor.push(
                        {
                            'id': response.feed.entry[count].gsx$id.$t,
                            'name': response.feed.entry[count].gsx$name.$t,
                            'floor': response.feed.entry[count].gsx$floor.$t
                        }
                    )
                }
                console.log('Sensor', curentScope.data.Sensor);
            });
        this.trackingService.getLocation()
            .then(function (response) { 
                curentScope.data.Location = [];
                for (var count = 0; count < response.feed.entry.length; count++) {
                    curentScope.data.Location.push(
                        {
                            'id': response.feed.entry[count].gsx$id.$t,
                            'date': response.feed.entry[count].gsx$date.$t,
                            'time': response.feed.entry[count].gsx$time.$t,
                            'userId': response.feed.entry[count].gsx$userid.$t,
                            'x1': response.feed.entry[count].gsx$x1.$t,
                            'x2': response.feed.entry[count].gsx$x2.$t,
                            'x3': response.feed.entry[count].gsx$x3.$t,
                            'x4': response.feed.entry[count].gsx$x4.$t,
                            'rangeId': response.feed.entry[count].gsx$rangeid.$t,
                        }
                    )
                }
                console.log('Location', curentScope.data.Location);
            });
        this.trackingService.getEventDetails()
            .then(function (response) {                                
                curentScope.data.EventDetail = [];
                for (var count = 0; count < response.feed.entry.length; count++) {
                    curentScope.data.EventDetail.push(
                        {
                            'id': response.feed.entry[count].gsx$id.$t,
                            'eventId': response.feed.entry[count].gsx$eventid.$t,
                            'userId': response.feed.entry[count].gsx$userid.$t,
                            'date': response.feed.entry[count].gsx$date.$t,
                            'time': response.feed.entry[count].gsx$time.$t
                        }
                    )
                }
                console.log('EventDetail', curentScope.data.EventDetail);
            });
        this.trackingService.getEvent()
            .then(function (response) {               
                curentScope.data.Event = [];
                for (var count = 0; count < response.feed.entry.length; count++) {
                    curentScope.data.Event.push(
                        {
                            'id': response.feed.entry[count].gsx$id.$t,
                            'name': response.feed.entry[count].gsx$name.$t
                        }
                    )
                }
                console.log('Event', curentScope.data.Event);
            });
        this.trackingService.getRange()
            .then(function (response) {               
                curentScope.data.Range = [];
                for (var count = 0; count < response.feed.entry.length; count++) {
                    curentScope.data.Range.push(
                        {
                            'id': response.feed.entry[count].gsx$id.$t,
                            'areaId': response.feed.entry[count].gsx$areaid.$t,
                            'sensorId': response.feed.entry[count].gsx$sensorid.$t,
                            'min': response.feed.entry[count].gsx$min.$t,
                            'max': response.feed.entry[count].gsx$max.$t,
                        }
                    )
                }
                console.log('Range', curentScope.data.Range);
            });

    }
    
    onChange(newValue) {
        this.modifiedData = [];
        var filteredRecords = _.filter(this.data.Location, function (location) {
            return location.date == newValue;
        });
        for (var count = 0; count < filteredRecords.length; count++) {
            this.modifiedData.push(
                {
                    'time': filteredRecords[count].time
                }
            )
            this.modifiedData[count].employeeName = _.find(this.data.Employee, { 'id': filteredRecords[count].userId }).name;
            this.modifiedData[count].area = _.find(this.data.Area, { 'id': _.find(this.data.Range, { 'id': filteredRecords[count].rangeId }).areaId }).name;
        }
    }

    search (){
        var currentScope= this;
        this.modifiedEmployeeData = [];
        var filteredRecords = _.filter(this.data.Location, function (employee) {
            return employee.userId == currentScope.employeeModel.id && employee.date == currentScope.employeeModel.date;
        });
        for (var count = 0; count < filteredRecords.length; count++) {
            this.modifiedEmployeeData.push(
                {
                    'date': filteredRecords[count].date,
                    'time': filteredRecords[count].time
                }
            )
            this.modifiedEmployeeData[count].employeeName = _.find(this.data.Employee, { 'id': filteredRecords[count].userId }).name;
            this.modifiedEmployeeData[count].area = _.find(this.data.Area, { 'id': _.find(this.data.Range, { 'id': filteredRecords[count].rangeId }).areaId }).name;
        }
    }
}
