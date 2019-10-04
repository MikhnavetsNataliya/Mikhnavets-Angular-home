import { fromEvent } from 'rxjs'; 
import { switchMap, map, takeUntil } from 'rxjs/operators';

const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");
context.strokeRect(0, 0, 500, 500);

const mousemove = fromEvent(canvas, "mousemove");
const mousedown = fromEvent(canvas, "mousedown");
const mouseup = fromEvent(canvas, "mouseup");

function createPaintBrush (x, y, brushX, brushY){
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x - brushX, y - brushY);
  context.stroke()
}

mousedown
  .pipe(
    switchMap(
      (ev) => mousemove
        .pipe(
          map((ev) => {
            createPaintBrush(ev.offsetX, ev.offsetY, ev.movementX, ev.movementY )
          }),
          takeUntil(mouseup)
        )
    )
  )
  .subscribe((ev) => {console.log(ev)});
