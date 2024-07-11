import React from 'react';
import './sidebar.css';

export default function SideBar({ sidebarcount, category, setcategory, setvideoplaycount }) {
  return (
    <div>
      {sidebarcount === true ? 
      <div className='bg-s sidebar'>
        <div className={`t-sm h ${category === 25 ? "active" : ""}`} onClick={() => { setcategory(25); setvideoplaycount(0); }}>
          <i className="fas fa-newspaper"></i> News
        </div>
        <div className={`t-sm h ${category === 20 ? "active" : ""}`} onClick={() => { setcategory(20); setvideoplaycount(0); }}>
          <i className="fas fa-gamepad"></i> Games
        </div>
        <div className={`t-sm h ${category === 17 ? "active" : ""}`} onClick={() => { setcategory(17); setvideoplaycount(0); }}>
          <i className="fas fa-futbol"></i> Sports
        </div>
        <div className={`t-sm h ${category === 30 ? "active" : ""}`} onClick={() => { setcategory(30); setvideoplaycount(0); }}>
          <i className="fas fa-film"></i> Movies
        </div>
        <div className={`t-sm h ${category === 10 ? "active" : ""}`} onClick={() => { setcategory(10); setvideoplaycount(0); }}>
          <i className="fas fa-music"></i> Music
        </div>

        <hr className='bg-light' />
        <div className='t-sm h'>
          <img className='profile mr-2'
            src="https://imgs.search.brave.com/6LyBYZ5Z4KvCqTV8O23UQkgR0SmllG7chlp78lxyBsI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1hbW9uZy11cy1w/cm9maWxlLXBpY3R1/cmUtZmhuYWhnZDNn/MGx6dmlxdi5qcGc"
            width="30" height="30" alt="Profile" />
          Profile
        </div>
      </div> :
      <div style={{zIndex: "5"}} className='small-sidebar'>
        <div className={`t-sm h ${category === 25 ? "active" : ""}`} onClick={() => { setcategory(25); setvideoplaycount(0); }}>
          <i className="fas fa-newspaper"></i>
        </div>
        <div className={`t-sm h ${category === 20 ? "active" : ""}`} onClick={() => { setcategory(20); setvideoplaycount(0); }}>
          <i className="fas fa-gamepad"></i>
        </div>
        <div className={`t-sm h ${category === 17 ? "active" : ""}`} onClick={() => { setcategory(17); setvideoplaycount(0); }}>
          <i className="fas fa-futbol"></i>
        </div>
        <div className={`t-sm h ${category === 30 ? "active" : ""}`} onClick={() => { setcategory(30); setvideoplaycount(0); }}>
          <i className="fas fa-film"></i>
        </div>
        <div className={`t-sm h ${category === 10 ? "active" : ""}`} onClick={() => { setcategory(10); setvideoplaycount(0); }}>
          <i className="fas fa-music"></i>
        </div>

        <hr className='bg-light' />
        <div className='t-sm h'>
          <img className='profile mr-2'
            src="https://imgs.search.brave.com/6LyBYZ5Z4KvCqTV8O23UQkgR0SmllG7chlp78lxyBsI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1hbW9uZy11cy1w/cm9maWxlLXBpY3R1/cmUtZmhuYWhnZDNn/MGx6dmlxdi5qcGc"
            width="30" height="30" alt="Profile" />
        </div>
      </div>}
    </div>
  );
}
