import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

  public FirstName: string;
  public postTitle: string;
  public twoWayBindings: string;

  constructor(){
    this.FirstName = 'Qasim';
    this.postTitle = 'Post value';
    this.twoWayBindings = '';
  }

  public postFormData(inputValue:HTMLInputElement):void {
    this.postTitle = inputValue.value;
    console.log('Button is clicked');
  }

  ngOnInit(): void {
  }

}
