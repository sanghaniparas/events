import { Injectable } from '@angular/core';
import pnp from '@pnp/pnpjs';
import { Constants } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor() { }

  getEventData(): Promise<Event[]> {
    return new Promise((resolve, reject) => {
      pnp.sp.web.lists
        .getByTitle(Constants.EVENTS)
        .items.select("*")
        .orderBy("EventDate", true)
        .get()
        .then((result) => {
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }
}
