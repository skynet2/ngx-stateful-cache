const dpExtend = require("deep-extend");

export class CacheProxy<T> {
    public value: T;

    constructor(obj?: Partial<T>) {
        if (!obj)
            return;

        dpExtend(this, obj);
    }
}