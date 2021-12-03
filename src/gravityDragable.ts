import {Draggable,CollisionCallback} from './dragable'

export class GravityDragable extends Draggable{
    constructor(selector:string,dropZones:string[] = [],cb:CollisionCallback){
        super(selector,dropZones,cb)
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
            
            const newY = currrentY + 0.5*(0.1*t)**2
            this.entity.setVector(this.entity.x,newY)
            this.checkForCollsion()

            this.element.style.top = `${newY}px`
            t++
        },1)
    }

    private checkForCollsion(){
        if(!this.dropZones || this.dropZones.length == 0 || this.isDestroyed) return
        this.dropZones.forEach((e) => {
            const isColliding = this.checkCollision(e)
            
            if(isColliding){
                let shouldDestroy = true;
                if(this.dropZoneCb){
                    this.dropZoneCb(e,() => {shouldDestroy = false;})
                }

                if(shouldDestroy){
                    this.isDestroyed = true
                    this.destroy()
                }
            }
        })
    }
}