let a = -9.8
AFRAME.registerComponent("gravity", {
  schema: {
    mass: {type: 'number', default: 1},
    radius: {type: 'number', default: 0.2},
  },
  init: function() {
    this.position = new THREE.Vector3();
    this.initialPos = new THREE.Vector3();
    this.h = this.initialPos.y;
    this.position.copy(this.el.object3D.position);
    this.initialPos.copy(this.el.object3D.position);
    this.startInterval = 0;
    this.initialSpeed = 0;
    setTimeout(() => {
      this.startInterval = new Date();
      this.ready = true;
    }, 3000);
  },

  tick: function() {
    if (!this.ready) return;
    if (this.el.object3D.position.y <= 0 || this.el.object3D.position.y > this.initialPos) {
      this.initialSpeed = Math.pow(2*a*this.initialPos.y, 0.5)
      a *=-1;
      this.startInterval = new Date();
    }
    const elapsed = (new Date() - this.startInterval)/1000
    //if (elapsed > 3) return;
    console.log(this.initialSpeed);
    let distance = getDistance(this.initialPos.y, this.initialSpeed, elapsed);
    this.el.object3D.position.set(this.position.x, distance, this.position.z);
    
  }
});


function getDistance(high, speed, time) {
  return high + speed*time + 0.5 * a * time**2
}
