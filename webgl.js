class WebGL{



    createCanvas(width,height){
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.id = 'canvas';
        return canvas;
    }
    createGL(canvas){
        const gl = canvas.getContext('webgl');
        if(gl==null || !(gl instanceof WebGLRenderingContext)){
            console.log('Error: Your Web Browser Does Not Support Webgl!');
            return null;
        }
        console.log('Webgl has been successfully created!');
        
        return gl;
    }
    
    createShader(gl,type,source){
        const shader = gl.createShader(type);
        gl.shaderSource(shader,source);
        gl.compileShader(shader);
        if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){
            console.error('Error: Shader cannot be created!')
            return null;
        }
        console.log('Shader has been successfully created!')
        return shader;
        
    }
    
    createProgram(gl,vsSource,fsSource){
        const vs = this.createShader(gl,gl.VERTEX_SHADER,vsSource);
        const fs = this.createShader(gl,gl.FRAGMENT_SHADER,fsSource);
        const program = gl.createProgram();
        gl.attachShader(program,vs);
        gl.attachShader(program,fs);
        gl.linkProgram(program)
        if(!gl.getProgramParameter(program,gl.LINK_STATUS)){
            console.error('Error: Cannot create Program!')
            return null;
        }
        console.log('Program is sucessfully created!')
        return program;
    }

    createBuffer(gl,vertexes){
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertexes),gl.STATIC_DRAW);
        return buffer;
    }

}