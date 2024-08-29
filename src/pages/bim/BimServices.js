import React, { useState } from 'react'
import './BimServices.css'
import BimThree from '../../components/three/BimThree'
import PageHeader from '../../components/header/pageheader/PageHeader'
import ForgeViewer from '../../components/view/ForgeViewer'
import FileUpload from '../../components/view/FileUpload'
import IFCViewer from '../../components/view/IFCViewer'
import GLTFViewer from '../../components/view/FileUpload'
const BimServices = () => {
  return (
    <div>
      <PageHeader />
      <div style={{ marginTop: "150px" }}></div>
      {/* <FileUpload/> */}
      {/* <IFCViewer /> */}
      {/* <iframe src="https://gmail4309800.autodesk360.com/shares/public/SH286ddQT78850c0d8a40afb40ddd6e9f325?mode=embed" width="100%" height="768" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe> */}
   
      {/* <iframe src="https://gmail4309800.autodesk360.com/shares/public/SH286ddQT78850c0d8a40d1aca5a2f3ea44f?mode=embed" width="100%" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe> */}
      {/* <Viewer/> */}
     <BimThree/>

    </div>
  )
}

export default BimServices