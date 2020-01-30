AFRAME.registerComponent("release-star",{
    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.releaseStar();
        });

        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.setAttribute('material','color','#1bff8d');
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.setAttribute('material','color','#ffab19');
            Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        });
    },

    //create the object
    releaseStar : function(){

        //remove all stars from the scene
        let stars = document.querySelectorAll('#star');
        let i;
        for (i=0; i < stars.length; i++){
            stars[i].parentNode.removeChild(stars[i]); //remove the child
        }
    }
});