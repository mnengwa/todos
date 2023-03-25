import { Component, Input } from "@angular/core";
import { ITaskEntry, TaskEntry } from "src/app/app.typings";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
})
export class ListComponent {
    @Input("list") tasks: ITaskEntry[] = [];

    get count() {
        return this.tasks.length;
    }
}
