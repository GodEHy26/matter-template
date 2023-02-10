import { global } from "./global.js";
import {main, stop} from "../main.js"
import {keyMap} from "./keyMap.js";
let ticks = 0;

// Everything inside this function runs every game tick
function tickCounter() { 

    const entities = global.entities;
    for (const i in entities) {
        entities[i].tick();
    }

    ticks++;
}

if (keyMap['F'] === true){

    stop()
    main()

}


export { tickCounter, ticks };