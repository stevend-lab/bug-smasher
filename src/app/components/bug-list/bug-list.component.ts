import { Component, OnInit } from '@angular/core';
import { Bugs} from "../../models/bugs";
import {SpiderComponent} from "../spider/spider.component";

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {
  public bugs: Bugs[];
  public inputBug: string;

  constructor() {
    this.bugs = [];
    this.inputBug = "";
  }

  ngOnInit(): void {

    // @ts-ignore
    this.bugs= [
      {
        content: 'First Bug',
        completed: false
      },
      {
        content: 'Second Bug',
        completed: true
      }
    ]
  }

  bugDone(id: number) {
    this.bugs.map((v, i) => {
      if (i === id) v.completed = false;
      return v;
    })
  }

  deleteBug(id:number) {
    this.bugs = this.bugs.filter((v, i) => i !== id);
  }

  addBug() {
  this.bugs.push({
    content: this.inputBug,
    completed: false
  })
    this.inputBug = "";
  }

}
