AFRAME.registerComponent("create-star",{
    init: function(){
        console.log('init component');

        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.createStar();

        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el is an html element
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        });
    },
    createStar : function(){

        const Context_AF = this;

        let starElem = document.createElement('a-entity');
        starElem.setAttribute('class','clickable');
        starElem.setAttribute('glow','true');
        // starElem.setAttribute('obj-model','obj:/assets/models/Cow.obj');
        // starElem.setAttribute('material', 'src:assets/textures/Cow.png');
        starElem.setAttribute('delete-star','');

        starElem.setAttribute('position',{x:((Math.random()*6.0) - 3.0), y:0, z: -4.0 -(Math.random()*3.0)});
        const randScale = 0.2 + (Math.random() * 0.8);
        starElem.setAttribute('scale',{x:randScale, y:randScale, z: randScale});


        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(starElem);
    }
});