// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { IfcLoader } from 'web-ifc-three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const IFCViewer = ({ ifcUrl }) => {
//   const containerRef = useRef();

//   useEffect(() => {
//     if (!ifcUrl || !containerRef.current) return;

//     // Initialize scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Add lighting
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(1, 1, 1).normalize();
//     scene.add(light);

//     // Set up controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

//     // Load IFC file
//     const loader = new IfcLoader();
//     loader.load(
//       ifcUrl,
//       (ifcModel) => {
//         scene.add(ifcModel);
//       },
//       undefined,
//       (error) => {
//         console.error('An error occurred loading the IFC file:', error);
//       }
//     );

//     camera.position.z = 10;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, [ifcUrl]);

//   return <div ref={containerRef} style={{ width: '100%', height: '100vh' }}></div>;
// };

// export default IFCViewer;
