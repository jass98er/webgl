var webgl = new WebGL();



function setup(){

      //Test Vertex Position List
      const position = [
        -1.0,1.0,
        1.0,1.0,
        -1.0,-1.0,
        1.0,-1.0,
    ];

    const vsSource = document.getElementById('2d-vertex-shader').text;
    const fsSource = document.getElementById('2d-fragment-shader').text;

    const canvas = webgl.createCanvas(window.innerWidth,window.innerHeight);
    const gl = webgl.createGL(canvas);
    const program = webgl.createProgram(gl,vsSource,fsSource);
    const buffer = webgl.createBuffer(gl,position);
    

    return{
        gl:gl,
        buffer:buffer,
        program:program,
        attributeLocation: {
            vertexPosition:gl.getAttribLocation(program,'aVertexPosition'),
        },
        uniformLocation:{
            projectionMatrix:gl.getUniformLocation(program,'uProjectionMatrix'),
            modelViewMatrix:gl.getUniformLocation(program, 'uModelViewMatrix'),
        }
    }

}

function draw(programLocation){
    let gl = programLocation.gl;
    gl.clearColor(0.0, 0.0, 0.0, 1.0); 
    

    gl.clear(gl.COLOR_BUFFER_BIT);


    
    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0;
    const zFar = 100.0;
    let pmatrix = new Mat4();
    let mmatrix = new Mat4();
    pmatrix.perspective(fieldOfView,aspect,zNear,zFar);
    mmatrix.translation(0,0,-6.0);
    const projectionMatrix = pmatrix.createFloatBuffer();
    const modelViewMatrix = mmatrix.createFloatBuffer();
    
    const numComponents = 2;  // pull out 2 values per iteration
    const type = gl.FLOAT;    // the data in the buffer is 32bit floats
    const normalize = false;  // don't normalize
    const stride = 0;         // how many bytes to get from one set of values to the next
                              // 0 = use type and numComponents above
    const offset = 0; 

  
    gl.bindBuffer(gl.ARRAY_BUFFER, programLocation.buffer);
    gl.vertexAttribPointer(
        programLocation.attributeLocation.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programLocation.attributeLocation.vertexPosition);
  
    gl.useProgram(programLocation.program);

  // Set the shader uniforms

    gl.uniformMatrix4fv(
      programLocation.uniformLocation.projectionMatrix,
      false,
      projectionMatrix);
    gl.uniformMatrix4fv(
      programLocation.uniformLocation.modelViewMatrix,
      false,
      modelViewMatrix);

  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
}



var obj = setup();
draw(obj);
