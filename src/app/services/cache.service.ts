import { Injectable } from "@angular/core";
import { CacheNamingService } from "./cache-naming.service";
import { CacheProxy } from "../objects/cache-proxy";

const deepClone = require("clone-deep");
const isPrimitive = require("is-primitive");
const dpExtend = require("deep-extend");

@Injectable()
export abstract class CacheService {
    abstract set(key: string, object: any): void;

    abstract get<T>(key: string): CacheProxy<T> | null;

    abstract getOrDefault<T>(key: string, isArray?: boolean): CacheProxy<T>;
}

export interface ICacheConstructor {
    new(cacheNamingService: CacheNamingService): CacheService;
}

@Injectable()
export class DefaultCacheService implements CacheService {
    constructor(private cacheNamingService: CacheNamingService) {
    }

    private cache: any = {};

    public set(key: string, object: any): void {
        if (isPrimitive(object))
            throw new Error("Current cache implementation does not support primitive types");

        key = this.cacheNamingService.transform(key);

        object = new CacheProxy(object);

        if (this.cache.hasOwnProperty(key)) {
            dpExtend(this.cache[key], object);
        }
        else {
            this.cache[key] = object;
        }
    }

    public getOrDefault<T>(key: string, isArray?: boolean): CacheProxy<T> {
        key = this.cacheNamingService.transform(key);

        let value = this.get<T>(key);

        if (value) {
            return value;
        }

        value = <any>({} as T);

        if (isArray)
            (<any>value).value = [];

        this.set(key, value);

        return this.getOrDefault(key, isArray);
    }

    public getCloned<T>(key: string): T | null {
        key = this.cacheNamingService.transform(key);

        let item = this.get<T>(key);

        if (!item)
            return null;

        return <T>deepClone(item.value);
    }

    public get<T>(key: string): CacheProxy<T> | null {
        key = this.cacheNamingService.transform(key);

        if (this.cache.hasOwnProperty(key)) {
            return <CacheProxy<T>>this.cache[key];
        }
        else {
            return null;
        }
    }
}