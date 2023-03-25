import * as dayjs from "dayjs";
import { monotonicFactory, ULID } from "ulid";

export interface ITaskEntry {
    _id: ULID;
    title?: string;
    done?: boolean;
    due?: dayjs.Dayjs;
    description?: string;
}

export class TaskEntry {
    _id = null;
    due = null;
    title = "";

    constructor(title: string) {
        this.due = dayjs();
        this.title = title;
        this._id = monotonicFactory()();
    }
}
