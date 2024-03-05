import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [uploadedVideo, setUploadedVideo] = useState(null);

    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        setUploadedVideo(file);
    };

    const handleRemoveVideo = () => {
        setUploadedVideo(null);
    };

    return (
        <div className="background">
            <div className="glass-morph-box">
                <h1>Video Inpainting with Local and Global Refinement</h1>
                <input type="file" id="video-upload" accept="video/*" onChange={handleVideoUpload} />
                {uploadedVideo && (
                    <div id="uploaded-video-info">
                        <p>{uploadedVideo.name}</p>
                        <button onClick={handleRemoveVideo}>Remove</button>
                    </div>
                )}
            </div>
            <div className="video-container">
                {uploadedVideo && (
                    <video controls>
                        <source src={URL.createObjectURL(uploadedVideo)} type="video/mp4" />
                    </video>
                )}
                {uploadedVideo && <button id="inpaint-btn">Inpaint</button>}
            </div>
        </div>
    );
};

export default Home;
