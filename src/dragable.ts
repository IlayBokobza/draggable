import {Entity} from './entity'

export type CollisionCallback = (e:Entity,stopDestruction:() => void) => void; 
export class Draggable{
    //data
    public element:HTMLElement
    public dropZones?:Entity[];
    public entity:Entity;
    public dropZoneCb?:CollisionCallback;
    public isDestroyed = false;
    
    //static data
    public static screenWidth = document.body.clientWidth
    private static grabEvent = new Event('grab')
    private static releasebEvent = new Event('release')
    
    constructor(selector:string,dropZones:string[] = [],dropZoneCb?:CollisionCallback){
        const element = document.querySelector(selector) as HTMLElement

        if(!element){
            throw new Error(`Did not find any element with the of ${selector}.`)
        }

        this.element = element
        this.entity = new Entity(0,0,element.clientHeight,element.clientWidth)
        
        if(dropZones.length > 0){
            this.dropZones = this.registerDropZones(dropZones)
            this.setCollisionCheck()
            this.dropZoneCb = dropZoneCb;
        }

        this.makeDragable()
    }

    /**Registers all the drop zones*/
    private registerDropZones(dropZonesSelectors:string[]){
        const dropZones = dropZonesSelectors.map(selector => {
            const zone = document.querySelector(selector)
            if(!zone) throw new Error(`Dropzone couln't be registered because no element with the selector of "${selector}" was found`)

            return Entity.fromHtmlElement(zone as HTMLElement);
        })

        return dropZones
    }

    /**Listen to the release event and checks for collision*/
    private setCollisionCheck(){
        this.element.addEventListener('release',() => {
            this.dropZones!.forEach(e => {
                if(this.checkCollision(e) && !this.isDestroyed){
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
        })
    }

    /**
     * Runs a collision test on this.entity with another entity
     * @param other the other entity to run the test on
     * */
    public checkCollision(other:Entity){
        //AABB test; taken from https://www.youtube.com/watch?v=59BTXB-kFNs
        const test1 = this.entity.x < other.x + other.w
        const test2 = this.entity.x + this.entity.w > other.x
        const test3 = this.entity.y < other.y + other.h
        const test4 = this.entity.h + this.entity.y > other.y

        return test1 && test2 && test3 && test4;
    }

    /**Turns the element draggable*/
    private makeDragable(){
        this.element.style.cursor = 'grab'
        this.element.style.position = 'absolute'
        document.body.style.minHeight = '100vh'
        
        this.element.addEventListener('mousedown',() => {
            this.element.style.cursor = 'grabbing'
            this.element.dispatchEvent(Draggable.grabEvent)

            document.body.addEventListener('mousemove',this.onMouseMove)
        })
        
        this.element.addEventListener('mouseup',(e) => {
            this.element.style.cursor = 'grab'
            this.element.dispatchEvent(Draggable.releasebEvent)

            document.body.removeEventListener('mousemove',this.onMouseMove)
        })
    }

    /**The event handler for onmousemove*/
    public onMouseMove = (e:MouseEvent) => {
        const x = e.clientX-this.element.clientWidth/2
        const y = e.clientY-this.element.clientHeight/2
        this.entity.setVector(x,y)

        if(y <= document.body.clientHeight - this.element.clientHeight && y >= 0){
            this.element.style.top = `${y}px`;
        }
        
        if(x <= Draggable.screenWidth - this.element.clientWidth && x >= 0){
            this.element.style.left = `${x}px`;
        }
    }

    /**Destroy the object*/
    public destroy(){
        this.element.remove()
    }
}