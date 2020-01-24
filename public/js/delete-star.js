AFRAME.registerComponent("delete-star",{
    init: function(){
        console.log('init component');

        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            Context_AF.deleteStar();
        });
        // Context_AF.el.addEventListener('mouseenter', function(event){
        //     Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
        // });
        // Context_AF.el.addEventListener('mouseleave', function(event){
        //     Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        // });
    },
    deleteStar : function(){

        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); //remove the child

    }
});