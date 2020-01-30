AFRAME.registerComponent("release-star",{
    init: function(){
        console.log('init component');

        const Context_AF = this;
        //const starScale = 0.01;
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

        const Context_AF = this;
        let stars = document.querySelectorAll('#star');
        let i;
        for (i=0; i < stars.length; i++){
            stars[i].parentNode.removeChild(stars[i]); //remove the child
        }
        
    }
});