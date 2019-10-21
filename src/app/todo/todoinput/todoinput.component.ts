import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css'],
  animations:[
    trigger('fadein',[state('void',style({
    opacity:0
  })),
  transition('void <=> *',animate(300)),
]),]
})
export class TodoinputComponent implements OnInit {

  constructor(public data:DataService) { }
  str=""
  itemtype=""
  newlistname=""
  newListNames=[]
  i=0
  dellist=""
  
  ngOnInit() {
  }
  add()
  {
    this.data.addItem(this.str,this.itemtype);
  }
  addList()
  {
    if(this.newlistname!='')
    {
      this.data.addNewList(this.newlistname)
      this.newListNames.push(this.data.OtherListitem[this.i].listName)
      this.i++;
    }
  }
  delList(dellist)
  {
    this.data.delListName(dellist);
  }
}
