AFRAME.registerComponent("create-star",{
    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.createStar();
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
    createStar : function(){

        const Context_AF = this;
        const starScale = 0.02;

        let starElem = document.createElement('a-entity');
        starElem.setAttribute('id','star')
        starElem.setAttribute('class','clickable');
        starElem.setAttribute('class','hoverable');

        starElem.setAttribute('obj-model','obj:/assets/models/star.obj');
        starElem.setAttribute('material', {src:'assets/textures/starUV.png', shader: 'flat'});
        starElem.setAttribute('star-properties','');

        starElem.setAttribute('position',{x:((Math.random() * 6.0) - 3), y:((Math.random() * 2.5) + 1.0), z:((Math.random() * 6.5) - 7.0)});
        starElem.setAttribute('scale', {x:starScale, y:starScale, z:starScale});

        //nice touches; adding an small rotation and a glow effect for intrigue
        starElem.setAttribute('animation', {property: 'rotation', to: {x:0, y:360, z:0}, loop: true, dur:5000, easing: 'linear'});
        starElem.setAttribute('light', {type: 'point', intensity: 0.05, color:'#ffff80'})


        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(starElem);
    }
});