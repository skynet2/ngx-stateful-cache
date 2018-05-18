import { Component, OnInit } from "@angular/core";
import { CacheService } from "../../src/app/services/cache.service";
import { ComplexObject } from "./objects/complexObject";
import { CacheProxy } from "../../src/app/objects/cache-proxy";

@Component({
    selector: "input-component",
    template: `<p>String example</p>
    <input [(ngModel)]="obj.value"/>
    <label>{{obj.value}}</label>
    <br>
    <p>Array Example</p>
    <ul *ngFor="let element of objArray.value">
        <li>{{element}}</li>
    </ul>
    <button (click)="pushObjectToArray()">Push new random object to array</button>
    <button>Create new replace object value</button>`
})
export class InputComponent implements OnInit {
    public obj: CacheProxy<string>;
    public objArray: CacheProxy<string[]>;
    private cacheKey: string = "string.rand";

    constructor(private cacheService: CacheService) {
    }

    ngOnInit(): void {
        this.obj = this.cacheService.getOrDefault(this.cacheKey);
        this.objArray = this.cacheService.getOrDefault("abcda", true);
    }

    public pushObjectToArray() {
        console.dir(this.objArray);

        this.objArray.value.push(Math.random().toString(36).substring(7));
    }
}