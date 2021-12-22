import { Component, OnInit } from '@angular/core';
import { Events } from '../shared/model/Events';
import { SharepointService } from '../shared/service/sharepoint.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Events[] = [];
  modelObj:Events=new Events();

  constructor(private sharepointService:SharepointService) { }

  ngOnInit(): void {
    this.getEventDetail();
  }
  getEventDetail():void{
    this.sharepointService
    .getEventData()
    .then((res:any) => { 
      this.events = res;
    })
    .catch((err) => JSON.stringify(err));
    }
    onclick(i){
      this.modelObj.EventDescription=this.events[i].EventDescription;
      this.modelObj.Title=this.events[i].Title;
    }
}
