import { ModuleWithProviders, NgModule } from "@angular/core";
import { CacheService, DefaultCacheService } from "./services/cache.service";
import { CacheNamingService, DefaultCacheNamingService } from "./services/cache-naming.service";

@NgModule({
    imports: [],
    declarations: [],
    bootstrap: [],
})
export class StatefulCacheModule {
    constructor() {
    }

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: StatefulCacheModule,
            providers: [
                {
                    provide: CacheNamingService,
                    useClass: DefaultCacheNamingService
                },
                {
                    provide: CacheService,
                    useClass: DefaultCacheService,
                    deps: [CacheNamingService]
                }]
        };
    }
}