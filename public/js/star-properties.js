AFRAME.registerComponent("star-properties",{
    init: function(){
        console.log('init component');

        const Context_AF = this;
        //add an event listener for star clicks to collect the stars on mobile
        Context_AF.el.addEventListener('click', function(event){
            Context_AF.collectStar();
        });
        //add an event listener for star hover events to collect the stars on desktop
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.collectStar();
        });
    },

    //function to 
    collectStar : function(){
        const Context_AF = this;

        //get camera position
        let cameraView = document.querySelector('#camera');
        let camPosition = cameraView.object3D.getWorldPosition();

        //set the target position for the objects to be just ahead of the camera so that the objects remain visible
        camPosition.z -= 1;
        camPosition.y -= 0.7;

        // let starPos = Context_AF.el.object3D.getWorldPosition();
        // console.log('x: '+ starPos.x);
        // console.log('y: '+ starPos.y);
        // console.log('z: '+ starPos.z);

        //send the stars to the target position in front of the camera
        Context_AF.el.setAttribute('animation__2', {property: 'position', to: {x:camPosition.x, y:camPosition.y, z:camPosition.z}, loop: false, dur:2000, easing: 'easeInOutQuad'});
        
    }
});