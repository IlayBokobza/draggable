export type DraggableOptions = {}

export class Draggable{
    element:HTMLElement
    options:DraggableOptions | undefined;

    constructor(selector:string,options?:DraggableOptions){
        const element = document.querySelector(selector) as HTMLElement

        if(!element){
            throw new Error(`Did not find any element with the of ${selector}.`)
        }

        this.element = element
        this.options = options
        this.makeDragable()
    }

    private makeDragable(){
        this.element.style.cursor = 'grab'
        this.element.style.position = 'absolute'
        document.body.style.minHeight = '100vh'
        
        this.element.addEventListener('mousedown',() => {
            this.element.style.cursor = 'grabbing'
            
            document.body.addEventListener('mousemove',this.onMouseMove)
        })
        
        this.element.addEventListener('mouseup',() => {
            this.element.style.cursor = 'grab'

            document.body.removeEventListener('mousemove',this.onMouseMove)
        })
    }

    private onMouseMove = (e:MouseEvent) => {
        const x = `${e.clientX-this.element.clientWidth/2}px`
        const y = `${e.clientY-this.element.clientHeight/2}px`

        this.element.style.left = x;
        this.element.style.top = y;
    }

    destroy(){
        this.element.remove()
    }
}