import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)

// // Animation 方案1
//
// let time = Date.now()
// const tick = () => {
//   // Time
//   const currentTime = Date.now()
//   const deltaTime = currentTime - time
//   time = currentTime
//   // Update objects
//   mesh.rotation.x += 0.001 * deltaTime
//   mesh.rotation.y += 0.001 * deltaTime
//
//   // Render
//   renderer.render(scene, camera)
//   window.requestAnimationFrame(tick)
// }
// tick ()


// // Animation 方案2
//
// const clock = new THREE.Clock()
// const tick = () => {
//   // Clock
//   const elapsedTime = clock.getElapsedTime()
//   // Update objects
//   // mesh.rotation.x = elapsedTime
//   mesh.rotation.x = Math.sin(elapsedTime)
//   mesh.rotation.y = Math.sin(elapsedTime)
//
//   // Render
//   renderer.render(scene, camera)
//   window.requestAnimationFrame(tick)
// }
// tick ()

// Animation 方案3 使用gsap
gsap.to(mesh.position, { duration:1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration:1, delay: 2, x: 0 })
const tick = () => {
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}
tick()
