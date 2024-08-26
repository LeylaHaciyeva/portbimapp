
// // import React, { useState, useEffect } from 'react';
// // import { Canvas, useFrame } from "@react-three/fiber";
// // import { useGLTF, Stage, OrbitControls } from "@react-three/drei";

// // import model2 from '../../images/Mech.GLB';
// // import model1 from '../../images/Elec.GLB';

// // function Model({ url }) {
// //     const { scene } = useGLTF(url, true);
// //     useFrame(({ clock }) => {
// //         // scene.rotation.y = clock.getElapsedTime() * 0.001;
// //     });
// //     return <primitive object={scene} />;
// // }

// // const BimThree = () => {
// //     const [modelUrl, setModelUrl] = useState(model1);

// //     const handleButtonClick = (model) => {
// //         setModelUrl(model);
// //     };

// //     // useEffect(() => {
// //     //     const timer = setTimeout(() => {
// //     //         setModelUrl(prevUrl => (prevUrl === model1 ? model2 : model1));
// //     //     }, 5000);

// //     //     return () => clearTimeout(timer);
// //     // }, [modelUrl]);

// //     return (
// //         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
// //             <div style={{ width: '100%', height: '100%', position: 'relative' }}>
// //                 <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ height: '100%', width: '100%' }}>
// //                     <OrbitControls speed={0.5} global zoom={0.005} polar={[-0.1, Math.PI / 4]} enableZoom={true} enablePan={true} />
// //                     <color attach="background" />
// //                     <Stage>
// //                         {modelUrl && <Model url={modelUrl} />}
// //                     </Stage>
// //                 </Canvas>
// //             </div>

// //             <div style={{ marginTop: '20px' }}>
// //                 <button onClick={() => handleButtonClick(model1)}>Load Model 1</button>
// //                 <button onClick={() => handleButtonClick(model2)}>Load Model 2</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default BimThree;


// import React from 'react'
// import IFCViewer from './IFCViewer.js'
// const ifcUrl = '../../images/fizuli.ifc'; 
// export default function BimThree() {
//   return (
//     <div>
//       <IFCViewer ifcUrl={ifcUrl}/>
//     </div>
//   )
// }
