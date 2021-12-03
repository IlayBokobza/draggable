import {Draggable} from './dragable'

export class GravityDragable extends Draggable{
    constructor(selector:string){
        super(selector)
        this.activateGravity()

        //activates gravirty when released
        this.element.addEventListener('release',this.activateGravity)
    }

    private activateGravity = () =>{
        let t = 0
        const interval = setInterval(() => {
            //calcutes change on the y axis
            const currrentY = parseInt(this.element.style.top.replace('px', '')) || 0;
            if(currrentY >= document.body.clientHeight - this.element.clientHeight){
                clearInterval(interval)
                this.element.style.top = `${document.body.clientHeight - this.element.clientHeight}px`
                t = 0
                return
            }
            
            this.element.style.top = `${(currrentY + 0.5*(0.1*t)**2)}px`

            t++
        },1)
    }

}