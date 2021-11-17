export type DraggableOptions = {
    gravity: boolean;
}

export class Draggable{
    element:HTMLElement
    options:DraggableOptions | undefined;

    private static screenWidth = document.body.clientWidth

    constructor(selector:string,options?:DraggableOptions){
        const element = document.querySelector(selector) as HTMLElement

        if(!element){
            throw new Error(`Did not find any element with the of ${selector}.`)
        }

        this.element = element
        this.options = options
        this.makeDragable()

        if(options?.gravity){
            this.addGravity()
        }
    }

    private makeDragable(){
        this.element.style.cursor = 'grab'
        this.element.style.position = 'absolute'
        document.body.style.minHeight = '100vh'
        
        this.element.addEventListener('mousedown',() => {
            this.element.style.cursor = 'grabbing'
            
            document.body.addEventListener('mousemove',this.onMouseMove)
        })
        
        this.element.addEventListener('mouseup',(e) => {
            this.element.style.cursor = 'grab'

            if(this.options?.gravity){
                this.addGravity()
            }

            document.body.removeEventListener('mousemove',this.onMouseMove)
        })
    }

    private onMouseMove = (e:MouseEvent) => {
        const x = e.clientX-this.element.clientWidth/2
        const y = e.clientY-this.element.clientHeight/2

        const currrentY = parseInt(this.element.style.top.replace('px',''))
        const currentX = parseInt(this.element.style.left.replace('px',''))

        // console.log(y)
        if(y <= document.body.clientHeight - this.element.clientHeight && y >= 0){
            this.element.style.top = `${y}px`;
        }

        if(x <= Draggable.screenWidth - this.element.clientWidth && x >= 0){
            this.element.style.left = `${x}px`;
        }
    }

    private addGravity = () =>{
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

    destroy(){
        this.element.remove()
    }
}