import Context from './context.js';
import Rect from './rect.js';

const canvas = document.getElementById("app");
const ctx = canvas.getContext("2d");

const app = new Context(ctx);
app.add(new Rect(app, 40, 40, "#ffcc00", 30, 30));