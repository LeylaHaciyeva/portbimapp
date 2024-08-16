// import React, { useEffect } from 'react';

// const ForgeViewer = ({ myUrn, accessToken }) => {
//     console.log(accessToken);
//     console.log(myUrn);
//     useEffect(() => {
//         if (!myUrn) return;
//         const script = document.createElement('script');
//         script.src = 'https://viewer.autodesk.com/viewers/7.0/viewer3D.min.js';
//         script.onload = () => {
//             window.Autodesk.Viewing.Initializer({ env: 'AutodeskProduction', accessToken: accessToken }, () => {
//                 const viewerContainer = document.getElementById('forgeViewer');
//                 window.Autodesk.Viewing.Document.load(`urn:${myUrn}`, (doc) => {
//                     const viewables = doc.getRoot().getDefaultGeometry();
//                     window.Autodesk.Viewing.ViewingApplication.loadDocumentNode(doc, viewables).then((viewer) => {
//                         viewer.loadDocumentNode(doc, viewables);
//                     });
//                 });
//             });
//         };
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, [myUrn]);

//     return <div id="forgeViewer" style={{ width: '100%', height: '600px' }}></div>;
// };

// export default ForgeViewer;
