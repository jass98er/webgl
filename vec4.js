var Vec4 = /** @class */ (function () {
    function Vec4() {
        this.vector = [];
        this.create();
    }
    Vec4.prototype.create = function () {
        this.vector[0] = 0;
        this.vector[1] = 0;
        this.vector[2] = 0;
        this.vector[3] = 1;
    };
    Vec4.prototype.add = function (x, y, z) {
        if (!x) {
            x = 0;
        }
        if (!y) {
            y = 0;
        }
        if (!z) {
            z = 0;
        }
        this.vector[0] += x;
        this.vector[1] += y;
        this.vector[2] += z;
        return this.vector;
    };
    Vec4.prototype.substruct = function (x, y, z) {
        if (!x) {
            x = 0;
        }
        if (!y) {
            y = 0;
        }
        if (!z) {
            z = 0;
        }
        this.vector[0] -= x;
        this.vector[1] -= y;
        this.vector[2] -= z;
        return this.vector;
    };
    return Vec4;
}());
