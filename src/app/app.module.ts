import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ListComponent } from "./task/list/list.component";
import { EntryComponent } from "./task/entry/entry.component";
import { NavbarComponent } from "./widget/navbar/navbar.component";
import { FooterComponent } from "./widget/footer/footer.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        EntryComponent,
        NavbarComponent,
        FooterComponent,
    ],
    imports: [FormsModule, BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
