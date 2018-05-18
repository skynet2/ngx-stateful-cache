import { Injectable } from "@angular/core";

@Injectable()
export abstract class CacheNamingService {
    abstract transform(input: string): string;
}

@Injectable()
export class DefaultCacheNamingService implements CacheNamingService {
    public transform(input: string): string {
        if (input == null)
            return "";

        return input.replace(/\s/g, "-").toLowerCase();
    }
}