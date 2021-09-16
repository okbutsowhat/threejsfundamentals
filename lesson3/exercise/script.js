// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const size = {
  width: 800,
  height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3 // 所有object默认都在中心，所以需要将camera移动后才能看到mesh
scene.add(camera)

// Renderer
const canvas = document.getElementsByClassName('webgl')[0]
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(size.width, size.height)

renderer.render(scene, camera)
