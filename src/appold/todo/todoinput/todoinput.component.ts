import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css']
})
export class TodoinputComponent implements OnInit {

  constructor(public data:DataService) { }
  str=""
  itemtype=""
  newlistname=""
  dellist=""
  newListNames=[]
  i=0
  
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
