import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';
import getByGroup from './lib/getByGroup.js'

class Bob extends Entity{
    constructor() {
        super()
        this.body = Matter.Bodies.rectangle(69, 420, 50, 50, {
            collisionFilter: {
                category: collisions.character,
                mask: collisions.ground 
            },
            render: {
                fillStyle: '#1cd1d4'
            },
            label: this.key,
            density: 1
        })
    }
    tick() {
        console.log("hello")

        if (keyMap["ArrowRight"] === true){

            Matter.Body.applyForce(this.body, this.body.position, {x: 1, y: 0})
        }
        
        if (keyMap["ArrowLeft"] === true){

            Matter.Body.applyForce(this.body, this.body.position, {x: -1, y: 0})

        }
        
        

        if {Matter.Query.collides(this.body, getByGroup("platform").bodies).length > 0}{
            if (keyMap["ArrowUp"] === true){

                Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -10})
            }
        }
    }
}
export default Bob