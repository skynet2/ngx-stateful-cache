import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppChildComponent } from "./app-child.component";
import { InputComponent } from "./input.component";
import { FormsModule } from "@angular/forms";
import { StatefulCacheModule } from "../../src/app/app.module";

@NgModule({
    imports: [BrowserModule, FormsModule, StatefulCacheModule.forRoot()],
    declarations: [AppComponent, AppChildComponent, InputComponent],
    bootstrap: [AppComponent]
})
export class PlayGroundModule {
}