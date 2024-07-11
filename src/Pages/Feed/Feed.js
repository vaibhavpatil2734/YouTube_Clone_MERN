import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../Data';
import './feed.css';

export default function Feed({ setvideoplaycount, sidebarcount, category, setsidebarcount }) {
  const onCount = sidebarcount === false ? 'c2' : 'c1';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const video_list_url = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=contentDetails,snippet,statistics&chart=mostPopular&regionCode=US&maxResults=50&videoCategoryId=${category}`;
      const response = await fetch(video_list_url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data.length) {
    return <div>No videos found</div>;
  }

  return (
    <div className='form-inline'>
      {data.map((item, index) => (
        <div
          key={index}
          to={`VideoPlay/${item.snippet.categoryId}/${item.id}`}
          className={`link card feedr border-radius-5 m-2 ${onCount}`}
          onClick={() => {setvideoplaycount(1); setsidebarcount(0);}}
        >
          <img
            height='10%'
            src={item.snippet.thumbnails.default.url}
            className="ri card-img-top"
            alt={item.snippet.title}
          />
          <div className="card-body">
            <div className='d-flex align-items-center'>
              <img
                className='profile mr-2'
                src="https://imgs.search.brave.com/6LyBYZ5Z4KvCqTV8O23UQkgR0SmllG7chlp78lxyBsI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1hbW9uZy11cy1w/cm9maWxlLXBpY3R1/cmUtZmhuYWhnZDNn/MGx6dmlxdi5qcGc"
                width="30"
                height="30"
                alt="Profile"
              />
              <h6><b>{item.snippet.title}</b></h6>
            </div>
            <div className='d-flex align-items-center'>
              <h6 className='mr-2 ml-5'><i>{item.statistics.viewCount} views</i></h6>
              <h6><i>{new Date(item.snippet.publishedAt).toLocaleTimeString()}</i></h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
