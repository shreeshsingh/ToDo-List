import { Injectable } from '@angular/core';
// import { TodofooterComponent } from './todofooter/todofooter.component'

@Injectable()

export class DataService{

    constructor() {  }


    gitems=[]
    pitems=[]
    litems=[]
    static gcount=0
    static pcount=0
    static lcount=0
    OtherListitem=[]
    obj
    i
    addNewList(listname:String)
    {
        this.obj={
            listName:listname,
            items:[]
        }
        this.OtherListitem.push(this.obj);
        
    }


    addItem(str:String,itemtype:String)
    {
        if(str!="" && itemtype=="General")
        {
            this.gitems.push(str);
            DataService.gcount++;
        }
        else if(str!="" && itemtype=="Priority")
        {
            this.pitems.push(str);
            DataService.pcount++;
        }
        else if(str!="" && itemtype=="Later")
        {
            this.litems.push(str);
            DataService.lcount++;
        }
        else{
            this.i=0
            while(this.i<this.OtherListitem.length)
            {
                if(this.OtherListitem[this.i].listName==itemtype)
                {
                    this.OtherListitem[this.i].items.push(str)
                }
                this.i++
            }
        }
    }

    getgCount()
    {
        console.log(DataService.gcount)
       
        return +(DataService.gcount);

    }
    getpCount()
    {
        console.log(DataService.pcount)
       
        return +(DataService.pcount);

    }
    getlCount()
    {
        console.log(DataService.lcount)
       
        return +(DataService.lcount);

    }

    getgItem()
    {
        return this.gitems;
    }
    getpItem()
    {
        return this.pitems;
    }
    getlItem()
    {
        return this.litems;
    }
    delg(i:number){
        this.gitems.splice(i,1);
        DataService.gcount--;
    }
    delp(i:number){
        this.pitems.splice(i,1);
        DataService.pcount--;
    }
    dell(i:number){
        this.litems.splice(i,1);
        DataService.lcount--;
    }
    deloth(i:number,ti:number)
    {
        this.OtherListitem[ti].items.splice(i,1);
    }
    delothall(mode)
    {
        while(this.OtherListitem[mode].items.length!=0)
        {
            this.OtherListitem[mode].items.pop();
        }
    }
    delall(mode)
    {
        if(mode=='g')
        {
            while(this.gitems.length!=0)
            {
                this.gitems.pop();
            }
        }
        if(mode=='p')
        {
            while(this.pitems.length!=0)
            {
                this.pitems.pop();
            }
        }
        if(mode=='l')
        {
            while(this.litems.length!=0)
            {
                this.litems.pop();
            }
        }
    }
    delListName(dellist)
    {
        if(dellist=='')
        {
            alert("Enter A List")
        }
        if(dellist=='General'||dellist=='Priority'||dellist=='Later')
        {
            alert("This List Cannot be Deleted");
        }
        this.i=0
        while(this.i<this.OtherListitem.length)
        {
            if(dellist==this.OtherListitem[this.i].listName)
            {
                this.OtherListitem.splice(this.i,1);
            }
        }
        
    }
}