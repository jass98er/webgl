var Mat4 = /** @class */ (function () {
    function Mat4() {
        this.matrix = [];
        this.create();
    }
    Mat4.prototype.create = function () {
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
        return this.matrix;
    };
    Mat4.prototype.translation = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.matrix[3] += x;
        this.matrix[7] += y;
        this.matrix[11] += z;
    };
    Mat4.prototype.perspective = function (fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(fovy / 2);
        var nf = 1.0 / (far - near);
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
    };
    Mat4.prototype.createFloatBuffer = function () {
        return new Float32Array(this.matrix);
    };
    return Mat4;
}());
