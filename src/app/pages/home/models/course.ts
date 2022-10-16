export class course {
    private id: number;
    private name: string;
    private level: string;
    private description: string;
    private imgname: string;

    constructor(){}

    public getId = ():number => {
        return this.id;
    }

    public getName = ():string => {
        return this.name;    
    }

    public getLevel = ():string => {
        return this.level;
    }

    public getDescription = () => {
        return this.description;    
    }

    public getImageName = () => {
        return this.imgname;       
    }
}