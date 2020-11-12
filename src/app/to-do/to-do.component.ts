import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDoList: object[];

  constructor() { }

  ngOnInit(): void {
    var l = localStorage.getItem('sairyo-to-do');
    if (l != null){
      this.toDoList = JSON.parse(l);
    }
    else{
      this.toDoList = [];
    }
  }

  createToDo(data){
    var newToDo = new Object;
    if (data.value.length > 0){
      newToDo = {
        "title" : data.value,
        "added" : Date.now(),
      }
      data.value = "";
      this.toDoList.push(newToDo);
      localStorage.setItem("sairyo-to-do", JSON.stringify(this.toDoList));
    }
  }

  createToDoBtn(data){
    var newToDo = new Object;
    data = data.parentNode.parentNode.firstChild;
    if (data.value.length > 0){
      newToDo = {
        "title" : data.value,
        "added" : Date.now(),
      }
      data.value = "";
      this.toDoList.push(newToDo);
      localStorage.setItem("sairyo-to-do", JSON.stringify(this.toDoList));
    }
  }

  removeToDo(i){
    this.toDoList.splice(parseInt(i),1);
    localStorage.setItem("sairyo-to-do", JSON.stringify(this.toDoList));
  }

  resetList(){
    this.toDoList = [];
    localStorage.setItem("sairyo-to-do", JSON.stringify(this.toDoList));
  }

}
