import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlayGroundModule } from "./app.module";
const zone = require('zone.js/dist/zone');

platformBrowserDynamic().bootstrapModule(PlayGroundModule);