import { Draggable } from "./dragable";
import { GravityDragable } from "./gravityDragable";

const e = new GravityDragable('#draggable',["#dropzone"],(e,prevent) => {
    // prevent()
    console.log('here')
})