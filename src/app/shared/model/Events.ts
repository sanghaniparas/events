export class Events {
    Title:string;
    EventDate:Date;
    EventDescription:string;

    constructor() {
        this.Title = "";
        this.EventDescription = "";
        this.EventDate=new Date();
   }
}