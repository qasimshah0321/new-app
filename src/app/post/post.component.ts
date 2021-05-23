import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public txtTitle: string;
  public txtContent: string;

  @Output() public EmitEventPostCreated = new EventEmitter();

  constructor(private _snackBar: MatSnackBar) {
    this.txtTitle = '';
    this.txtContent = '';
  }

  ngOnInit(): void {
  }

  public createPost(): void {
    const post = {
      title: this.txtTitle,
      content: this.txtContent
    };

    this.EmitEventPostCreated.emit(post);
    this._snackBar.open('Post Created Successfully');
    this.resetForm()
  }

  public resetForm(): void {
    this.txtTitle = '';
    this.txtContent = '';
  }

}
