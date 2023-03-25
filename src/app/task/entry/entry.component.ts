import { Component, Input } from "@angular/core";
import { ITaskEntry, TaskEntry } from "src/app/app.typings";

@Component({
    selector: "app-entry",
    templateUrl: "./entry.component.html",
    styleUrls: ["./entry.component.css"],
})
export class EntryComponent {
    @Input("entry") task: ITaskEntry = {_id: null};
}
