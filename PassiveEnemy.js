import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';
import getByGroup from './lib/getByGroup.js'

class PassiveEnemy extends Entity {
    constructor(posX, posY) {
        super()

        this.body = Matter.Bodies.rectangle(posX, posY, 50, 50, {
            collisionFilter: {
                category: collisions.enemy,
                mask: collisions.ground | collisions.character
            }, 
            render: {
                fillStyle: 'red'
            },
            label: this.key,
            density: 0.01
        })
    }
}

export default PassiveEnemy