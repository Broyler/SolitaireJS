export default class Primitive {
    constructor(mgr, x = 0, y = 0) {
        if (this.constructor === Primitive) {
            throw new Error("Нельзя инициализировать абстрактные классы. (Класс Primitive)");
        }

        this.mgr = mgr;
        this.x = x;
        this.y = y;
    }

    get area() {
        throw new Error("Поле area должно иметь представление.");
    }

    draw() {
        throw new Error("Функция draw() должна быть инициализированна.");
    }

    drawf() {
        this.draw();
        this.usedArea = this.area;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        this.render();
    }

    render() {
        this.mgr.invokeUpdate(this.usedArea);
        this.drawf();
    }
}