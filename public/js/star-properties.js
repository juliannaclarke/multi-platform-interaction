AFRAME.registerComponent("star-properties",{
    init: function(){
        console.log('init component');

        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            Context_AF.deleteStar();
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.collectStar();
        });
        // Context_AF.el.addEventListener('mouseleave', function(event){
        //     Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        // });
    },
    //function to delete the stars on click
    //might not work as i expect bc i don't want to click the stars i just want to perform a general click
    deleteStar : function(){

        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); //remove the child

    },

    //function to 
    collectStar : function(){
        const Context_AF = this;

        //get camera position
        // let cameraView = document.querySelector('#camera');
        // let collected = document.querySelector('#star');
        // cameraView.appendChild(collected);
        // collected.setAttribute('position', {x:0, y:0, z:-1})

        // Context_AF.el.object3D.position.set();//camera position
        // Context_AF.el.object3D.animation.property.set('rotation');
        // Context_AF.el.object3D.animation.to.set(0, 360, 0);
        // Context_AF.el.object3D.animation.loop.set(true);
        // Context_AF.el.object3D.animation.dur.set(10000);
        
    }
});