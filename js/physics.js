const a = -9.8
const e = 0.9;
AFRAME.registerComponent("gravity", {
  init: function() {
    this.radius = +this.el.getAttribute("radius");
    this.position = new THREE.Vector3();
    this.initialPos = new THREE.Vector3();
    this.position.copy(this.el.object3D.position);
    this.initialPos.copy(this.el.object3D.position);
    this.expectedY = this.initialPos.y + 2;
    this.startInterval = 0;
    this.initialSpeed = 0;
    this.elapsed = 0;
    this.ready = 0;
    this.diff = 10;
    setTimeout(() => {
      this.startInterval = new Date();
      this.ready = true;
    }, 3000);
  },

  tick: function(time, timeDelta) {
    if (!this.ready || this.diff < 1e-4) return;
    if (this.el.object3D.position.y <= this.radius) {
      let speed = final_speed(this.initialPos.y);
      this.expectedY = Math.pow(e, 2)*this.initialPos.y - this.radius;
      this.initialSpeed = e*speed;
      this.startInterval = new Date();
      this.initialPos.y = this.radius;
      this.elapsed = 0;
      if (this.expectedY < this.radius) {
        this.diff = 0;
        return;
      }
    } else if (this.el.object3D.position.y >= this.expectedY) {
      this.initialSpeed = 0;
      this.initialPos.y = this.el.object3D.position.y;
      this.elapsed = 0;
      this.expectedY += 2;
    }
    this.elapsed+= timeDelta
    let distance = calculatePosition(this.initialPos.y, this.initialSpeed, this.elapsed/1000) ?? this.el.object3D.position.y;
    this.diff = Math.abs(this.el.object3D.position.y - distance);
    this.el.object3D.position.set(this.position.x, distance, this.position.z);
  }
});
