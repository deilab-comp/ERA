const scene = document.getElementsByTagName("a-scene")[0];
const spheres = [];

console.log("hola");
for (let i = 0; i < 1; i++) {
  const sphere = document.createElement("a-sphere");
  sphere.setAttribute("position", {x: 0, y: 2, z: -2});
  sphere.setAttribute("radius", "0.2");
  sphere.setAttribute("color", "#FFC65D");
  sphere.setAttribute("gravity", true);
  scene.appendChild(sphere);
  spheres.push(sphere);
}
