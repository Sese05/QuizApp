import { Component } from '@angular/core';
import { NavController, Segment, IonicModule, SegmentButton, RadioButton } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

musicTot=0;

musicQuestion1:string;
musicA1:string;
musicAnswer1="Adele";
pointMusic1=0;

musicA2:string;
musicAnswer2="Jay-Z";
pointMusic2=0;

musicA3:string;
musicAnswer3="Camila Cabello"
pointMuisc3=0;

musicA4:string;
musicAnswer4="Huston,Texas"
pointMuisc4=0;

musicA5:string;
musicAnswer5="SingleLadies"
pointMuisc5=0;

TechnologyTot=0;
TecQuestion1:string;

TecA1:string;
TechAnswer1="16 bits"
pointTec1=0;

TecA2:string;
TechAnswer2="Central Processing Unit"
pointTec2=0;

TecA3:string;
TechAnswer3="Booting"
pointTec3=0;

TecA4:string;
TechAnswer4="Processor"
pointTec4=0;

TecA5:string;
TechAnswer5="False"
pointTec5=0;

HistoryTot=0;

His1:string;
HisAnswer1="South Africa"
pointHis1=0;

His2:string;
HisAnswer2="Robben Island"
pointHis2=0;

His3:string;
HisAnswer3="F.W.De Klerk"
pointHis3=0;

His4:string;
HisAnswer4="1918"
pointHis4=0;

His5:string;
HisAnswer5="Fort Hare"
pointHis5=0;

 constructor(public navCtrl: NavController) {

 }
 
  checkMusicA1():void{
    if(this.musicA1==this.musicAnswer1)
    {
         this.pointMusic1=5;
    } 
 
 }

checkMusicA2():void{
  if(this.musicA2==this.musicAnswer2)
  {
       this.pointMusic2=5;
  } 
}
   
checkMusicA3():void{
  if(this.musicA3==this.musicAnswer3)
  {
       this.pointMuisc3=5;
  } 
    
}

checkMusicA4():void{

  if(this.musicA4==this.musicAnswer4)
  {
       this.pointMuisc4=5;
  }
   
}

checkMusicA5():void{
  if(this.musicA5==this.musicAnswer5)
  {
       this.pointMuisc5=5;
  }
  
}
calculateTotalMusic():void{

this.musicTot = this.pointMusic1 + this.pointMusic2 + this.pointMuisc3 + this.pointMuisc4 + this.pointMuisc5;
}

myScore():void{
  this.checkMusicA1();
  this.checkMusicA2();
  this.checkMusicA3();
  this.checkMusicA4();
  this.checkMusicA5();
  this.calculateTotalMusic();
}


checkTecA1():void{
  if(this.TecA1==this.TechAnswer1)
  {
       this.pointTec1=5;
  } 
}
  
checkTecA2():void{
  if(this.TecA2==this.TechAnswer2)
  {
       this.pointTec2=5;
  } 
}
  
checkTecA3():void{
  if(this.TecA3==this.TechAnswer3)
  {
       this.pointTec3=5;
  } 
}

checkTecA4():void{
  if(this.TecA4==this.TechAnswer4)
  {
       this.pointTec4=5;
  } 
}

checkTecA5():void{
  if(this.TecA5==this.TechAnswer5)
  {
       this.pointTec5=5;
  } 
}
calculateTotalTechnology():void{

  this.TechnologyTot = this.pointTec1 + this.pointTec2 + this.pointTec3 + this.pointTec4 + this.pointTec5;
  }

  myScore2():void{
    this.checkTecA1();
    this.checkTecA2();
    this.checkTecA3();
    this.checkTecA4();
    this.checkTecA5();
    this.calculateTotalTechnology();
  }
  checkHis1():void{
    if(this.His1==this.HisAnswer1)
    {
         this.pointHis1=5;
    } 
  }

  checkHis2():void{
    if(this.His2==this.HisAnswer2)
    {
         this.pointHis2=5;
    } 
  }

  checkHis3():void{
    if(this.His3==this.HisAnswer3)
    {
         this.pointHis3=5;
    }   
  }

  checkHis4():void{
    if(this.His4==this.HisAnswer4)
    {
         this.pointHis4=5;
    } 
  }
  checkHis5():void{
    if(this.His5==this.HisAnswer5)
    {
         this.pointHis5=5;
    } 
  }
  calculateTotalHistory():void{

    this.HistoryTot = this.pointHis1 + this.pointHis2 + this.pointHis3 + this.pointHis4 + this.pointHis5;
    }
    myScore3():void{
      this.checkHis1();
      this.checkHis2();
      this.checkHis3();
      this.checkHis4();
      this.checkHis5();
      this.calculateTotalHistory();
    }  
}









 
 










