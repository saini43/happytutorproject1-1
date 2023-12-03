// VideoView.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoView = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch the list of videos from the server
    axios.get('http://localhost:3001/get-videos')
      .then(response => {
        setVideos(response.data); // Assuming the server responds with a list of video details
      })
      .catch(error => {
        console.error('Fetch Videos Error:', error);
      });
  }, []);

  return (
    <div>
      {videos.map(video => (
        <div key={video._id}>
          <video controls width="300">
            <source
              src={`http://localhost:3001/videos/${encodeURIComponent(video.filename)}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoView;
