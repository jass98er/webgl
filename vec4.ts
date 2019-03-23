class Vec4{
    
    private vector:number[];
    constructor(){
        this.vector = [];
        this.create();
    }
    private create(){
        this.vector[0] = 0;
        this.vector[1] = 0;
        this.vector[2] = 0;
        this.vector[3] = 1;
    }
    add(x?:number,y?:number,z?:number){
        if(!x){
            x=0;
        }
        if(!y){
            y=0;
        }
        if(!z){
            z=0;
        }
        this.vector[0] += x;
        this.vector[1] += y;
        this.vector[2] += z;
        return this.vector;
    }
    substruct(x?:number,y?:number,z?:number){
        if(!x){
            x=0;
        }
        if(!y){
            y=0;
        }
        if(!z){
            z=0;
        }
        this.vector[0] -= x;
        this.vector[1] -= y;
        this.vector[2] -= z;
        return this.vector;
    }

}