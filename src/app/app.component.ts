import { Component } from "@angular/core";
import { ITaskEntry, TaskEntry } from "src/app/app.typings";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "todos-app";

    tasks: ITaskEntry[] = [new TaskEntry("Eat")];

    onCreateTask(title: string) {
        this.tasks = [...this.tasks, new TaskEntry(title)];
    }

    onRemoveTask(entry: TaskEntry) {
        const index = this.tasks.findIndex(({ _id }) => _id === entry._id);

        this.tasks.splice(index, 1);
    }
}
