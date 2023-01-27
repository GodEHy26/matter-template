import './lib/matter.js';
import { keyMapper } from './lib/keyMap.js';
import { tickCounter } from './lib/tickCounter.js';
import { global } from './lib/global.js';
import Character from './Character.js';
import Platform from './Platform.js';
import Bob from './Bob.js';

function main() {

    const { Engine, Render, Runner, Composite, World } = Matter;

    // Create a running engine
    const engine = Engine.create({
        gravity: {
            x: 0,
            y: 1
        }
    });

    // Create a renderer
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 2000,
            height: 900,
            wireframes: false
        }
    });

    // Add the engine, and an empty list of 'bodies' to the world
    World.add(engine.world, []);

    // Start the renderer
    Render.run(render);
    const runner = Runner.create();

    // Ensure that the physics runs at a constant speed regardless of framerate
    runner.isFixed = false;

    Runner.run(runner, engine); 

    // Define global variables:
    global.bodies = []; // List of physics 'bodies' in the world
    global.entities = []; // List of entities in the world
    global.world = engine.world;

    // Set function to run every game tick
    Matter.Events.on(runner, 'tick', tickCounter);

    // Check for keypresses and store them
    window.addEventListener('keydown', e => keyMapper(e))
    window.addEventListener('keyup', e => keyMapper(e))

    // Add entities here

    const ground = new Platform(100, 600, 400, 30);
    ground.add();

    const Platform1 = new Platform(600, 400, 400, 30);
    Platform1.add();

    const Platform2 = new Platform(1000, 500, 400, 30);
    Platform2.add();
    
    const Platform3 = new Platform(1400, 300, 400, 30);
    Platform3.add();
    
    const Platform4 = new Platform(1800, 800, 400, 30);
    Platform4.add();

    const myplayer = new Bob()
    myplayer.add();

}
window.onload = main;