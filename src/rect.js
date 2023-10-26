import Primitive from './primitive.js';

export default class Rect extends Primitive {
    constructor(mgr, w, h, color, x = 0, y = 0) {
        super(mgr, x, y);
        this.w = w;
        this.h = h;
        this.color = color;
        this.drawf();
    }

    get area() {
        return {x: this.x, y: this.y, w: this.w, h: this.h};
    }

    draw() {
        this.mgr.ctx.save(); // Todo: check variable saving vs. save-restore
        this.mgr.ctx.fillStyle = this.color;
        this.mgr.ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        );
        this.mgr.ctx.restore();
    }
}