import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ForgeViewer from './ForgeViewer';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [myUrn, setMyUrn] = useState('');
  const [translationStatus, setTranslationStatus] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const intervalRef = useRef(null);
  const fetchAccessToken = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/forge-token');
      setAccessToken(response.data.accessToken);
    } catch (error) {
      console.error('Error fetching access token:', error.message);
    }
  };
  useEffect(() => {
    fetchAccessToken();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('http://localhost:8080/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMyUrn(response.data.urn);
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  // const checkTranslationStatus = async (urn) => {
  //   if (!accessToken) return;
  //   try {
  //     const response = await axios.get(`http://localhost:8080/api/forge/translation-status?urn=${urn}`, {
  //       headers: { 'Authorization': `Bearer ${accessToken}` },
  //     });

  //     const status = response.data.derivatives.find(d => d.outputType === 'svf');


  //     if (status) {
  //       if (status.progress === 100) {
  //         setTranslationStatus('Translation Completed');
  //       } else {
  //         setTranslationStatus(`Translation In Progress: ${status.progress}%`);
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Error checking translation status:', error.message);
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload and Translate</button>
      </form>
      <div>
        <h3>View your file:</h3>
        {myUrn && <ForgeViewer myUrn={myUrn} accessToken={accessToken} />}
      </div>
    </>
  );
};

export default FileUpload;
