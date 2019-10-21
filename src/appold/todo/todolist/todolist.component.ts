import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(public data:DataService) { }
  glist=[]
  plist=[]
  llist=[]
  tablist=[]
  i=0
  ngOnInit() {
    this.glist=this.data.getgItem();
    this.plist=this.data.getpItem();
    this.llist=this.data.getlItem();
  }
 
  remove(i,mode){
    if(mode=='g')
    {
      this.data.delg(i);
    }
    if(mode=='p')
    {
      this.data.delp(i);
    }
    if(mode=='l')
    {
      this.data.dell(i);
    }
  } 
  removeoth(i,ti)
  {
    this.data.deloth(i,ti);
  }
  removeAll(mode)
  {
    this.data.delall(mode)
  }
  removeothAll(mode)
  {
    this.data.delothall(mode)
  }
}
