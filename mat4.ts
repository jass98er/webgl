class Mat4{

    private matrix:number[];

    constructor(){
        this.matrix = [];
        this.create();
    }
    private create(){
        this.matrix[0] = 1;
        this.matrix[1] = 0;
        this.matrix[2] = 0;
        this.matrix[3] = 0;
        this.matrix[4] = 0;
        this.matrix[5] = 1;
        this.matrix[6] = 0;
        this.matrix[7] = 0;
        this.matrix[8] = 0;
        this.matrix[9] = 0;
        this.matrix[10] = 1;
        this.matrix[11] = 0;
        this.matrix[12] = 0;
        this.matrix[13] = 0;
        this.matrix[14] = 0;
        this.matrix[15] = 1;
        return this.matrix
    }
    perspective(fovy, aspect, near, far){
        let f = 1.0 / Math.tan(fovy / 2);
        let nf = 1.0 / (far-near);
        this.matrix[0] = f / aspect;
        this.matrix[1] = 0;
        this.matrix[2] = 0;
        this.matrix[3] = 0;
        this.matrix[4] = 0;
        this.matrix[5] = f;
        this.matrix[6] = 0;
        this.matrix[7] = 0;
        this.matrix[8] = 0;
        this.matrix[9] = 0;
        this.matrix[10] = (far + near) * nf;
        this.matrix[11] = -1;
        this.matrix[12] = 0;
        this.matrix[13] = 0;
        this.matrix[14] = 2 * (far * near) * nf;
        this.matrix[15] = 0;
        return this.matrix;
    }
    change(index,number){
        this.matrix[index] = number;
    }
    createFloatBuffer(){
        return new Float32Array(this.matrix);
    }

}