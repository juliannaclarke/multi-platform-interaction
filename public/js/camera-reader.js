AFRAME.registerComponent('rotation-reader', {
    tick: function () {

      console.log(this.el.object3D.rotation);
  

      console.log(this.el.object3D.position);
    }
  });