import React from 'react';
import './navbar.css';

export default function NavBar(props) {
  return (
    <div className='nava'>
      <nav className="bg-c navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" onClick={()=>{props.setsidebarcount(pri=>pri===false?true:false)}}>
          <img src="https://img.icons8.com/?size=100&id=OTxpMqWbm71F&format=png&color=FFFFFF" width="50" height="30" alt="" />
        </a>
        <a className="navbar-brand" href="#">
          <img className="imgbrand" src="https://imgs.search.brave.com/0ve5VLSkcfTRjqxh_HuSj9nX6s2DPl6YdnJYJGMuTRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Zb3VUdWJl/L1lvdVR1YmUtV2hp/dGUtRGFyay1CYWNr/Z3JvdW5kLUxvZ28u/d2luZS5zdmc" width="120" height="30" alt=""  />
        </a>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <form>
            <input className=" sp form-control mr-sm-2  text-light bg-dark" type="search" placeholder="Search" aria-label="Search" />
            <button className=" searchpos btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            <img className='profile-img' src="https://imgs.search.brave.com/6LyBYZ5Z4KvCqTV8O23UQkgR0SmllG7chlp78lxyBsI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1hbW9uZy11cy1w/cm9maWxlLXBpY3R1/cmUtZmhuYWhnZDNn/MGx6dmlxdi5qcGc" width="40" height="40"/>
          </form>
          
        </div>
      </nav>
    </div>
  );
}
