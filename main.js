const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry,material);
scene.add(cube)
cube.position.set(1,1,1)
cube.scale.set(2,0.5,3)


//camera position is z axis is 5 
//Note: in blender the y axis is called z axis in threejs . so if i am moving anything in z in three i will move in 
//y axis in blender
camera.position.z = 5;



//without this you will not able to see anything
renderer.render(scene,camera)
