export class Entity{
    public x:number;
    public y:number;

    /**@param w stands for width*/
    public w:number;

    /**@param h stands for height*/
    public h:number;

    /**@param htmlElement is the element which the entity is representing */
    public htmlElement?:HTMLElement;

    constructor(x:number,y:number,w:number,h:number,element?:HTMLElement){
        this.x = x;
        this.y = y
        this.w = w;
        this.h = h;
        this.htmlElement = element;
    }

    /**
     * Converts an HTML elemnt to an entity 
     * @param element is the element you want converted ito an entity
     * */
    public static fromHtmlElement(element:HTMLElement){
        const bodyRect = document.body.getBoundingClientRect()
        const elemRect = element.getBoundingClientRect()
        const y = elemRect.top - bodyRect.top
        const x = elemRect.left - bodyRect.left

        return new Entity(x,y,element.clientWidth,element.clientHeight)
    }

    /** Sets the vector of the entity (the X and Y) */
    public setVector(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}