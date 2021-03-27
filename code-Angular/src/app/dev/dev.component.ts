import { Component, OnInit ,Input, Output , EventEmitter} from "@angular/core";
// import * as EventEmitter from "events";

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit{
  constructor(){

  }
  ngOnInit(){

  }


  /**

  //Pipes
  name : string = 'Hari code me'
  logo : string = 'Welcome to codeme'
  info = {
    'name':'hari',
    'logo':'codeme'
  }
  date = new Date();

  dob :Date = new Date('2010-01-16')

  //Component Interaction
  @Input('parentData') name ;

  @Output() childEvent = new EventEmitter()

  nametext :string = 'Hey I am from Codeme'
  fireEvent(){
    this.childEvent.emit(this.nametext);
    console.log('Data Send from Child Component to Parent Component');
  }


  //*ngFor
  languages = ['JavaScript','TypeScript']
  templang :string = ''
  onUpdatelang(event){
    this.templang = (<HTMLInputElement>event.target).value
    // console.log('Templ value---->',this.templang);
  }
  addlang(){
    this.languages.push(this.templang);
    console.log('Updated Language--->',this.languages);
  }

  
  // *ngSwitch
  language :string = 'typeScript'


  // *ngIf
  displayName : boolean = false
  displayNamefun(){
    this.displayName = true
    console.log('function false--->',this.displayName)
    setTimeout(() => {
      this.displayName = false
      console.log('SetTimeOut false--->',this.displayName)
    },2000);
  }
 

  //Event Binding
  langUsed = ''
  onlangUsed(event : any){
    console.log(event)
    this.langUsed="TypeScript is Used over here."
  }

  codetext=''
  onUpdate(event : Event){
    this.codetext = (<HTMLInputElement>event.target).value;
    console.log(this.codetext)
  }

  dtext = 'EnableButton'
  dButton = true
  dfunction (){
    setTimeout(() => {
      this.dButton=true
      this.dtext='DisableButton'
      console.log(this.dButton)
      console.log(this.dtext)
    }, 100);
  }
  constructor(){
    setTimeout(() => {
      this.dButton=false
    }, 3000);
  }


  //Style Binding
  _success = "half";
  _pass = false
  _special = true
  textClass={
    "success" : this._pass ,
    "failed" : !this._pass ,
    "Style" : this._special
  }


  //Property Binding
  error = false;
  sproperty = 'yellow'
  ngBinding = {
    color : 'orange',
    fontStyle:'italic'
  }

  
  //Style Binding
  myNameID = 101
  isButton = false
  constructor(){
    setTimeout(() =>{
      this.isButton = true
      console.log(this.isButton)
    },5000)
  }
  */
}