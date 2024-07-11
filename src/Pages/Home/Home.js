import React, { useState } from 'react';
import './home.css';
import SideBar from '../../Components/SideBar/SideBar';
import Feed from '../Feed/Feed';
import VideoPlay from '../VideoPlay/VideoPlay';

export default function Home({ sidebarcount, setsidebarcount }) {
  const [videoplaycount, setvideoplaycount] = useState(0);
  const [category, setcategory] = useState(0);
  console.log('videoplaycount:', videoplaycount);

  return (
    <div className='a'>
      <SideBar sidebarcount={sidebarcount} category={category} setcategory={setcategory}setvideoplaycount={setvideoplaycount} />
      {videoplaycount === 0 ? (
        <div className={sidebarcount ? 'f-c1' : 'f-c2'}>
          <Feed sidebarcount={sidebarcount} setvideoplaycount={setvideoplaycount} category={category} setsidebarcount={setsidebarcount} />
        </div>
      ) : (
        <VideoPlay />
      )}
    </div>
  );
}
