export class Draggable{

    public static screenWidth = document.body.clientWidth
    public element:HTMLElement

    private static grabEvent = new Event('grab')
    private static releasebEvent = new Event('release')
    
    constructor(selector:string){
        const element = document.querySelector(selector) as HTMLElement

        if(!element){
            throw new Error(`Did not find any element with the of ${selector}.`)
        }

        this.element = element
        this.makeDragable()
    }

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

    public onMouseMove = (e:MouseEvent) => {
        const x = e.clientX-this.element.clientWidth/2
        const y = e.clientY-this.element.clientHeight/2
        
        if(y <= document.body.clientHeight - this.element.clientHeight && y >= 0){
            this.element.style.top = `${y}px`;
        }
        
        if(x <= Draggable.screenWidth - this.element.clientWidth && x >= 0){
            this.element.style.left = `${x}px`;
        }
    }

    public destroy(){
        this.element.remove()
    }
}