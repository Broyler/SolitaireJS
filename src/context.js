export default class Context {
    constructor(ctx) {
        this.ctx = ctx;
        this.primitives = [];
        this.resize();
        addEventListener("resize", () => this.resize());
    }

    add(primitive) {
        this.primitives.push(primitive);
    }

    resize() {
        const scale = window.devicePixelRatio;
        let { width, height } = document.body.getBoundingClientRect();
        width = ~~(width + 1);
        height = ~~(height * 0.9 + 1);
        this.ctx.canvas.width = width * scale;
        this.ctx.canvas.height = height * scale;
        this.ctx.scale(scale, scale);
        this.ctx.canvas.style.width = width + "px";
        this.ctx.canvas.style.height = height + "px";
        this.redraw();
    }

    redraw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.primitives.forEach(primitive => primitive.drawf());
    }

    invokeUpdate(area) {
        // Todo: find all entities in the given bbox, DRAW them.
        this.ctx.clearRect(
            area.x,
            area.y,
            area.w,
            area.h
        );
    }
}