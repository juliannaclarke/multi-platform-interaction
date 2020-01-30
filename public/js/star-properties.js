AFRAME.registerComponent("star-properties",{
    init: function(){
        console.log('init component');

        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            Context_AF.collectStar();
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.collectStar();
        });
        // Context_AF.el.addEventListener('mouseleave', function(event){
        //     Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        // });
    },

    //function to 
    collectStar : function(){
        const Context_AF = this;

        //get camera position
        let cameraView = document.querySelector('#camera');
        let camPosition = cameraView.object3D.getWorldPosition();
        camPosition.z = camPosition.z-1;
        camPosition.y = camPosition.y-1;
        // cameraView.appendChild(Context_AF.el);
        Context_AF.el.object3D.position.set(camPosition);
        
    }
});