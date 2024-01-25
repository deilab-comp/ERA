const scene = document.getElementsByTagName("a-scene")[0];
const spheres = [];
for (let i = 0; i < 10; i++) {
  const sphere = document.createElement("a-sphere");
  let [x, y, z] = [(Math.random()*5 - 2.5), 3+(Math.random()*2 - 1), -3+(Math.random()*0.5 - 0.25)]
  let r = Math.random()*0.25 + 0.2;
  sphere.setAttribute("position", {x, y, z});
  sphere.setAttribute("radius", r);
  sphere.setAttribute("color", "#FFC65D");
  sphere.setAttribute("gravity", true);
  scene.appendChild(sphere);
  spheres.push(sphere);
}

function calculatePosition(position, speed, time) {
  return position + speed * time + 0.5 * a * Math.pow(time, 2);
}

function final_speed(initial_position) {
   return Math.pow(Math.abs(2 * a * initial_position), 0.5);
}
