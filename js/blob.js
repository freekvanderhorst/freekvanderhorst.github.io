import { spline } from "https://cdn.skypack.dev/pin/@georgedoescode/spline@v1.0.1-hRL9kOYcUbrdRYD1GZT3/mode=imports,min/optimized/@georgedoescode/spline.js";
import SimplexNoise from "https://cdn.skypack.dev/pin/simplex-noise@v2.4.0-QVY6iED1CpGbDsx8QMWE/mode=imports,min/optimized/simplex-noise.js";

const path = document.querySelector("path");
const root = document.documentElement;
const step = 35;
let noiseStep = 0.0007;

const simplex = new SimplexNoise();

const points = createPoints();

(function animate() {
  path.setAttribute("d", spline(points, 1, true));

  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
    const x = map(nX, -1, 1, point.originX - step, point.originX + step);
    const y = map(nY, -1, 1, point.originY - step, point.originY + step);

    // update the point's current coordinates
    point.x = x;
    point.y = y;

    // progress the point's x, y values through "time"
    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  requestAnimationFrame(animate);
})();

function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

function noise(x, y) {
  return simplex.noise2D(x, y);
}

function createPoints() {
  const points = [];
  // how many points do we need
  const numPoints = 6;
  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints;
  // the radius of the circle
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    // x & y coordinates of the current point
    const theta = i * angleStep;

    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    // store the point's position
    points.push({
      x: x,
      y: y,
      // we need to keep a reference to the point's original point for when we modulate the values later
      originX: x,
      originY: y,
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000
    });
  }

  return points;
}