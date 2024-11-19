import { Component, EventEmitter } from '@angular/core';
import { Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{

  @Input() public parentData : any; // Receive data from parent

  @Output() public Myevent = new EventEmitter(); // Send data to parent


  // Send a message to the parent
  public SendMessage() 
  {
    this.Myevent.emit("Hello From Child To Parent")
  }

 }
