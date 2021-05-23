import { Component, OnInit, Input } from '@angular/core';
import {IPost} from '../Interface/IPost';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private _http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.titles = data
     });
  }
  public titles: any;
  private _jsonURL = 'assets/post.json';
  @Input() posts: IPost[] = [];
  ngOnInit(): void {
  }

  public getJSON(): Observable<any> {
    return this._http.get(this._jsonURL);
  }

}
