import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'user',
  templateUrl: 'app/user.component.html',
  providers: [
      UserService,
  ],
})
export class UserComponent implements OnInit {   
    users: any;
    modifiedData: any;
    dates = '10/10/2016 10/7/2016 10/6/2016'.split(' ');
    constructor(private browserService: UserService) {
    }

    ngOnInit(): void {
        this.users ={};
        this.modifiedData = [];
        console.log('lodash version:', _.VERSION);
        var curentScope = this;
        this.browserService.getUsers()
            .then(function (response) {
                console.log('getUsers', response.feed.entry);
                curentScope.users.Data = response.feed.entry;
            });
        this.browserService.getArea()
            .then(function (response) {
               console.log('getArea', response.feed.entry);
               curentScope.users.Area = response.feed.entry;
            });
        this.browserService.getSensor()
            .then(function (response) {
                console.log('getSensor', response.feed.entry);
                curentScope.users.Sensor = response.feed.entry;
            });
        this.browserService.getLocation()
            .then(function (response) {
                console.log('getLocation', response.feed.entry);
                curentScope.users.Location = response.feed.entry;
            });
        this.browserService.getEventDetails()
            .then(function (response) {
                console.log('getEventDetails', response.feed.entry);
                curentScope.users.EventDetails = response.feed.entry;
            });
        this.browserService.getEvent()
            .then(function (response) {
                console.log('getEvent', response.feed.entry);
                curentScope.users.Event = response.feed.entry;
            });
        this.browserService.getRange()
            .then(function (response) {
                console.log('getRange', response.feed.entry);
                curentScope.users.Range = response.feed.entry;
            });
        
    }
    
    onChange(newValue) {
        var userRecords = _.cloneDeep(this.users);     
        for (var count = 0; count < userRecords.Data.length; count++) {
            this.modifiedData.push(
                {
                    'id': userRecords.Data[count].gsx$id.$t,
                    'name': userRecords.Data[count].gsx$name.$t,
                    'type': userRecords.Data[count].gsx$type.$t
                }
            )
        }
    }
}
