import { useEffect, useRef } from "react";
import {UPLOAD_PRESET , CLOUD_NAME} from '../constants'

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
      },
      function (error, result) {
        console.log(result);
      }
    );
    console.log(cloudinaryRef.current);
  }, []);

  return <button onClick={()=>{
    widgetRef.current.open()
  }}>Upload</button>;
};

export default UploadWidget;
