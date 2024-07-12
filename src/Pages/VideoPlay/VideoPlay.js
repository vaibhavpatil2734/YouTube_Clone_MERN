import React, { useState, useEffect, useCallback } from 'react';
import './videoplay.css';
import { API_KEY } from '../../Data';  // Ensure this path is correct
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function VideoPlay(props) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const randomCategory = Math.floor(Math.random() * 30) + 1;  // Random category id between 1 and 30
      const video_list_url = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=contentDetails,snippet,statistics&chart=mostPopular&regionCode=US&maxResults=10&videoCategoryId=${randomCategory}`;
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="vpp card">
        <iframe  className="mt-4 vs" width="860" height="515" src="https://www.youtube.com/embed/jk9AjS7o604?si=uuNCG2nXPQyGpnNK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="form-inline">
            <div className='form-inline'>
              <img
                className='r'
                src="https://imgs.search.brave.com/6LyBYZ5Z4KvCqTV8O23UQkgR0SmllG7chlp78lxyBsI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1hbW9uZy11cy1w/cm9maWxlLXBpY3R1/cmUtZmhuYWhnZDNn/MGx6dmlxdi5qcGc"
                width="40"
                height="40"
                alt="Profile"
              />
              <h4 className='ml-3'>among us</h4>
            </div>
            <div className='btnlike mt-2 '>
              <h5>
                <button className='btn btn-secondary btnradileft'><i className="bi bi-hand-thumbs-up ml-3 mr-4"></i></button>
                <button className='btn btn-secondary btnradiright'><i className="bi bi-hand-thumbs-down ml-3 mr-4"></i></button>
              </h5>
            </div>
            <div className='subscribe-btn ml-2'>
              <i className="bi bi-person-plus"></i> Subscribe
            </div>
          </div>
          <div className="comments-section">
            <h3>Comments</h3>
            <input
              className="form-control form-control-sm m-2"
              type="text"
              data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add comments"
              aria-label=".form-control-sm example"
            />
            <div  id="collapseExample" className="card card-body p-4" style={{ backgroundColor: "#666666", border: "none" }}>
              <button className='btn-comment-cancel btn btn-outline-dark' onClick={() => setNewComment('')}>Cancel</button>
              <button className='btn-comment-comment btn btn-outline-dark' onClick={handleAddComment}>Comment</button>
            </div>
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <img
                  className='comment-profile'
                  src="https://imgs.search.brave.com/MsKR-QxhzIliSLyRKaih3jDuBR8G0LxkV7peK8A9Jtc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xMS82OS9i/bGFuay1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLXZlY3Rvci00/NTE2MTE2OS5qcGc"
                  width="40"
                  height="40"
                  alt="Profile"
                />
                <div className="comment-content">
                  <h4><i>{comment}</i></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='small-cards'>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data.map((item, index) => (
          <div key={index} className='card mb-3 cardsidecolor'>
            <div className="row g-0">
              <div className="col-md-5">
                <img src={item.snippet.thumbnails.medium.url} className="img-fluid rounded-start card-img" alt="Card" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h6 className="card-title">{item.snippet.title}</h6>
                  <p className="card-text"><small className="text-muted">{new Date(item.snippet.publishedAt).toLocaleDateString()}</small></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
