var Colors = {
  red:0xf25346,
  white:0xd8d0d1,
  purple:0x8338ec,
  indigo:0x3a86ff,
  blue:0x68c3c0,
  orange:0xFF9E00,
}

var reactions = [
  {//deiterium
    reagents: [
      { type:0, valences:[1], protons:1, neutrons:1 },
      { type:0, valences:[1], protons:1, neutrons:1 }
    ],
    product: { valences:[2,2,6,2,6,6], protons:26, neutrons:26},
    subProduct: [
      { type:1 },
      { type:2 },
    ],
  }
]

var scene = new THREE.Scene()

var width = window.innerWidth
var height = window.innerHeight

var z = 5
var camera = new THREE.OrthographicCamera(
  (width / -2)*z,
  (width / 2)*z,
  (height / 2)*z,
  (height / -2)*z,
  -1000*z,
  1000*z
)

camera.position.z = 1

var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setClearColor("#fff", 0)

renderer.setSize( window.innerWidth, window.innerHeight )

document.body.appendChild( renderer.domElement )

var lights = []

lights[0] = new THREE.PointLight(0xffffff, 0.5, 0)
lights[0].position.set(200, 0, 0)

lights[1] = new THREE.PointLight(0xffffff, 0.5, 0)
lights[1].position.set(0, 200, 0)

lights[2] = new THREE.PointLight(0xffffff, 0.5, 0)
lights[2].position.set(0, 100, 100)

lights[3] = new THREE.AmbientLight(0xffffff, 0.6)

lights.forEach(function(light){
  scene.add(light)
})

const baseRadius = width/38.4
console.log(baseRadius)

createjs.Ticker.setFPS(60)



//========================CREATE FUNCTIONS=====================================================
//=============================================================================================
function createTorus(r, tubeD){
  const geometry = new THREE.TorusGeometry(r, tubeD, 50, 50)
  const material = new THREE.MeshLambertMaterial({color: Colors.white})
  let torus = new THREE.Mesh(geometry, material)

  return torus
}

function createSphere(r, color, x, y){
  const geometry = new THREE.SphereGeometry( r, 50, 50 )
  const material = new THREE.MeshLambertMaterial({color})
  const sphere = new THREE.Mesh( geometry, material )

  // sphere.material.opacity=params.opacity || 1
  sphere.position.x = x || 0
  sphere.position.y = y || 0

  return sphere
}

class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {
		super();
		this.scale = scale;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t*20;
		const ty = Math.sin(20* Math.PI * t );

		return optionalTarget.set( tx, ty, 0 ).multiplyScalar( this.scale/1 );

	}

}
//=============================================================================================
//=============================================================================================

function createNeitrino({length, radius}){
  const geometry = new THREE.CylinderGeometry( baseRadius/8, baseRadius/8, length*20, 32 );
  const material = new THREE.MeshLambertMaterial({color: Colors.purple});
  const cylinder = new THREE.Mesh( geometry, material );

  const sphere = new THREE.Mesh( new THREE.SphereGeometry( baseRadius*1.5, 50, 50 ), material)
  sphere.translateY(-10*length)

  const neitrino = new THREE.Group().add( cylinder, sphere )
  neitrino.rotation.z=1.57
  neitrino.translateY(-10*length)

  return neitrino
}

function createPositron({length}){
  const path = new CustomSinCurve( length )
  console.log(path)
  const geometry = new THREE.TubeGeometry( path, 2000, baseRadius/8, 20)
  const material = new THREE.MeshLambertMaterial({color: Colors.indigo})
  const mesh = new THREE.Mesh( geometry, material )
  
  const sphere = new THREE.Mesh( new THREE.SphereGeometry( baseRadius*1.5, 50, 50 ), material)

  sphere.translateX(length*20)
  console.log(sphere.position)
  const positron = new THREE.Group()
  positron.add( mesh, sphere )

  positron.rotation.z=0.90
  return positron
}

function createCore(p,n){

  const core = new THREE.Group()

  const geometry = new THREE.SphereGeometry((n+p)+baseRadius/2, Math.ceil(Math.sqrt(n+p)), Math.ceil(Math.sqrt(n+p)))
  const material = new THREE.MeshBasicMaterial({wireframe:true, color:0xffffff})
  const frame = new THREE.Mesh(geometry, material)

  core.add(frame)

  let vertices = frame.geometry.vertices

  while(p!=0){
    const random = Math.floor(Math.random() * vertices.length)
    const {x, y, z} = vertices[random]
    const material = new THREE.MeshLambertMaterial({color: Colors.red})
    const geometry = new THREE.SphereGeometry(baseRadius*1.5, 40, 40)
    const nuklon = new THREE.Mesh(geometry, material)

    nuklon.position.set(x, y, z)
    p--
    vertices.splice(random ,1)
    core.add(nuklon)
  }

  while(n!=0){
    const random = Math.floor(Math.random() * vertices.length)
    const {x, y, z} = vertices[random]
    const material = new THREE.MeshLambertMaterial({color: Colors.white})
    const geometry = new THREE.SphereGeometry(baseRadius*1.5, 40, 40)
    const nuklon = new THREE.Mesh(geometry, material)
    nuklon.position.set(x, y, z)
    n--
    vertices.splice(random ,1)
    core.add(nuklon)
  }

  core.remove(frame)

  return core
}

function createAtom(shellCounts, protons, neutrons, type){
  let shift = 0

  if(type == 0){
    shift = -(baseRadius * protons * 50)
  }else if(type == 1){
    shift =  baseRadius * protons * 50
  }
  let atom = []

  atom[0] = createCore(protons, neutrons) //nucleus
  atom[0].position.x += shift

  atom[1] = []

  for (v = 1; v <= shellCounts.length; v++) {
    var valence = new THREE.Group()

    const radius = baseRadius * v * 13
    const ring = createTorus( radius, baseRadius/8, )

    valence.add(ring)

    let angle = 0
    for (i = 0; i < shellCounts[v-1]; i++) {
      const posX = radius * Math.cos(angle)
      const posY = radius * Math.sin(angle)

      angle += (Math.PI * 2) / shellCounts[v-1]
      const electron = createSphere(baseRadius*1.5, Colors.blue, posX, posY)

      valence.add(electron)
    }

    atom[1].push(valence)
  }

  atom[1].forEach( (v) => {
    v.translateX(shift)
    scene.add(v)
  })
  scene.add(atom[0])

  return atom
}
//===========================================================================================
//===========================================================================================
//===========================================================================================

function showMenu(value){
  document.getElementsByClassName('menu')[0].style.display=String(value)
}

function scale(input){
  z=input.value
  camera.position.z=z*5
  camera = new THREE.OrthographicCamera(
    (width / -2)*z,
    (width / 2)*z,
    (height / 2)*z,
    (height / -2)*z,
    -1000*z,
    1000*z
  )
}

//===========================================================================================
//===========================================================================================
//===========================================================================================

var reaction = []
var stage = 0
function simulate(reactionId) {
  const {reagents, product, subProduct} = reactions[reactionId]
  if(stage==0){
    while(scene.children.length > 4){ 
      scene.remove(scene.children[4])
    }
    reagents.forEach( (reagent, i)=>{
      switch (reagent.type) {
        case 0:
          reaction.push(createAtom(reagent.valences, reagent.protons, reagent.neutrons, i))
        case 1:

        case 2:
      }
    })

    stage++

  } else if(stage==1){

    const explode = createSphere({ color: Colors.orange })
    explode.material.opacity=0
    scene.add(explode)

    reaction.forEach((atom)=>{

      createjs.Tween.get().wait(1900).to({},100).addEventListener("complete", ()=>{

        explode.material.opacity=1
        explodeScale=product.protons*7
        createjs.Tween.get(explode.scale)
          .to({x:explodeScale,y:explodeScale,z:explodeScale},300)
          .addEventListener("complete", ()=>{
            explode.scale={x:1,y:1,z:1}
            scene.remove(explode)
          })

        createjs.Tween.get(explode.material).wait(220).to({opacity:0},60)

      })

      createjs.Tween.get(atom[0].position).to({x:0}, 2000).addEventListener("complete", ()=>{
        scene.remove(atom[0])
      })

      atom[1].forEach((v)=>{
        createjs.Tween.get(v.position).to({x:0}, 2000).addEventListener("complete", ()=>{
          scene.remove(v)
        })
      })

    })
    setTimeout(()=>{ 
      reaction = [createAtom(product.valences, product.protons, product.neutrons, null)]
      stage=0
      const length = product.valences.length*30

      subProduct.forEach((item)=>{
        // switch (item.type){
        //   case 1:
        //     scene.add(createPositron({length}))
        //   case 2:
        //     scene.add(createNeitrino({length}))
        // }
      })
    }, 2150)
  }
  console.log(reaction)
}


var animationFlag = true
function atomAnimation(box){
  animationFlag = Boolean(box.checked)
}


//=======================render==============================
// camera.rotation.x=-0.45
var render = (time)=>{
  requestAnimationFrame(render);
  var baseRotation = 0.05;
  const k = 0.05
  const divide = 400

  // core.rotation.y += baseRotation/2
  // core.rotation.x += baseRotation/2
  // core.rotation.z += baseRotation/2

  if(animationFlag){
    reaction.forEach((atom,i)=>{
      atom[1].forEach((v, i)=>{
        v.rotation.y += (baseRotation + (i * k))**-1/divide
        v.rotation.x += (baseRotation + (i * k))**-1/divide
        v.rotation.z += (baseRotation + (i * k))**-1/divide
      })
      atom[0].rotation.x += 0.01
      atom[0].rotation.y += 0.01
    })
  }else{
    reaction.forEach((atom,i)=>{
      atom[1].forEach((v, i)=>{
        v.rotation.y = 0
        v.rotation.x = 0
        v.rotation.z = 0 
      })
      atom[0].rotation.x = 0
      atom[0].rotation.y = 0
    })
  }
  renderer.render(scene, camera)
};

render()

window.addEventListener('resize', ()=>{
  camera.aspect= window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}, false)