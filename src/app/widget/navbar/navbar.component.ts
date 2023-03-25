import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    taskTitle: string = "";

    @Output() taskCreated = new EventEmitter<string>();

    onTaskTitleInput(event: any) {
        this.taskTitle = event.target.value;
    }

    onTaskTitleEvent(event: any) {
        this.taskCreated.emit(this.taskTitle);
        this.taskTitle = "";
    }
}
