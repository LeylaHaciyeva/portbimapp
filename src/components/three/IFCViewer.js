// // IFCViewer.js
// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
// import { IfcViewerAPI } from 'web-ifc-three';
// import * as THREE from 'three';

// const IFCViewer = ({ ifcUrl }) => {
//   const canvasRef = useRef();
//   const viewer = useRef();

//   useEffect(() => {
//     if (!canvasRef.current) return;
//     viewer.current = new IfcViewerAPI();
//     viewer.current.init(canvasRef.current);

//     // Load IFC file
//     viewer.current.loadIfcUrl(ifcUrl);

//     return () => {
//       viewer.current?.dispose();
//     };
//   }, [ifcUrl]);

//   return (
//     <Canvas ref={canvasRef} style={{ height: '100vh', width: '100%' }}>
//       <PerspectiveCamera makeDefault position={[10, 10, 10]} />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default IFCViewer;
