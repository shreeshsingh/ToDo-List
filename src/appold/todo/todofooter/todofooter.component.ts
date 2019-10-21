import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-todofooter',
  templateUrl: './todofooter.component.html',
  styleUrls: ['./todofooter.component.css']
})
export class TodofooterComponent implements OnInit {

  count=0

  constructor(public data:DataService) { 
    
  }
  ngOnInit() {
    setInterval(this.change,5);
  }

  change()
    {
      this.count=DataService.gcount+DataService.pcount+DataService.lcount;
      document.getElementById("pp").innerHTML="No. of items: "+this.count
    }
  
}
