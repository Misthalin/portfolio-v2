// This code defines an animation of moving dots on an HTML canvas.
// The dots are connected with lines based on their distance from each other and the current mouse position.
// The main function canvasDots sets up the canvas, creates and animates the dots, and connects them based on their distance.
// Written by Adrian Nysted Riise, 03/2023
// Inspired by https://github.com/bscottnz/portfolio-site/tree/main/src

const RGB_COLOR = '0, 218, 218';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

type DotsProperties = {
  numberOfDots: number;
  distanceBetweenDots: number;
  connectDotsWidth: number;
  connectDotsHeight: number;
  array: Dot[];
};

// Calculates and returns the DotsProperties based on the given window dimensions.
const getDotsProperties = (
  windowWidth: number,
  windowHeight: number
): DotsProperties => {
  const screenSize = windowWidth * windowHeight;
  const numberOfDots = Math.floor(screenSize / 2500);
  const distanceBetweenDots = 60;
  const connectDotsWidth = windowWidth < 1800 ? windowWidth / 4 : 1800 / 4;
  const connectDotsHeight = windowHeight < 1800 ? windowHeight / 4 : 1800 / 4;
  return {
    numberOfDots,
    distanceBetweenDots,
    connectDotsWidth,
    connectDotsHeight,
    array: [],
  };
};

// Creates and returns a Dot object with random properties within the given canvas.
const createDot = (canvas: HTMLCanvasElement): Dot => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const vx = -0.5 + Math.random();
  const vy = -0.5 + Math.random();
  const radius = Math.random() * 1.5;
  return { x, y, vx, vy, radius };
};

// Updates the position of each Dot in the given array based on their velocity
// and the dimensions of the given canvas.
const animateDots = (dots: Dot[], canvas: HTMLCanvasElement): void => {
  const width = canvas.width;
  const height = canvas.height;

  dots.forEach((dot) => {
    const xLimit = width + dot.radius;
    const yLimit = height + dot.radius;

    dot.x += dot.vx * 0.5;
    dot.y += dot.vy * 0.5;

    if (dot.x > xLimit || dot.x < -dot.radius) dot.vx = -dot.vx;
    if (dot.y > yLimit || dot.y < -dot.radius) dot.vy = -dot.vy;
  });
};

// Checks if the given point (x, y) is inside an ellipse
// with given center, width, and height.
const isInEllipse = (
  x: number,
  y: number,
  centerX: number,
  centerY: number,
  width: number,
  height: number
): boolean => {
  const a = width / 2;
  const b = height / 2;
  return Math.pow((x - centerX) / a, 2) + Math.pow((y - centerY) / b, 2) <= 1;
};

// Main function that sets up the canvas for the dots animation,
// it takes care of creating dots, animating them, and connecting them based on their distance.
const canvasDots = (canvas: HTMLCanvasElement): void => {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = 0.3;

  const mousePosition = {
    x: (30 * canvas.width) / 100,
    y: (30 * canvas.height) / 100,
  };

  window.addEventListener('scroll', () => {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  });

  const dots = getDotsProperties(window.innerWidth, window.innerHeight);
  for (let i = 0; i < dots.numberOfDots; i++) {
    dots.array.push(createDot(canvas));
  }

  // Connects dots based on their distance from each other and the mouse position.
  const connectDots = (
    dots: DotsProperties,
    mousePosition: { x: number; y: number }
  ): void => {
    const { distanceBetweenDots, array, connectDotsWidth, connectDotsHeight } =
      dots;

    const distanceRatio = (dotDistance: number): number =>
      Math.max(
        0,
        dotDistance / Math.min(connectDotsWidth, connectDotsHeight) - 0.3
      );

    array.forEach((i_dot, i) => {
      array.slice(i + 1).forEach((j_dot) => {
        const xDiff = Math.abs(i_dot.x - j_dot.x);
        const yDiff = Math.abs(i_dot.y - j_dot.y);

        if (xDiff < distanceBetweenDots && yDiff < distanceBetweenDots) {
          const dotDistance = Math.hypot(
            i_dot.x - mousePosition.x,
            i_dot.y - mousePosition.y
          );

          if (
            isInEllipse(
              i_dot.x,
              i_dot.y,
              mousePosition.x,
              mousePosition.y,
              connectDotsWidth,
              connectDotsHeight
            )
          ) {
            ctx.beginPath();
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            ctx.strokeStyle = `rgba(${RGB_COLOR}, ${
              1 - distanceRatio(dotDistance)
            })`;
            ctx.stroke();
            ctx.closePath();
          }
        }
      });
    });
  };

  // Called recursively to clear the canvas, animate dots, and connect them.
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animateDots(dots.array, canvas);
    connectDots(dots, mousePosition);
    requestAnimationFrame(render);
  };

  // Updates the mouse position and the first dot's position
  // whenever the mouse moves over the window.
  window.onmousemove = (event: MouseEvent) => {
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY - scrollPosition;
    dots.array[0].x = event.pageX;
    dots.array[0].y = event.pageY - scrollPosition;
  };

  requestAnimationFrame(render);
};

export default canvasDots;
