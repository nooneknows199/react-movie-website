import React from 'react';
import {Box,Container,CssBaseline} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loadPosts = async () => {
    const res = await axios.get(`https://nooneknows199.github.io/react-movie-api/db.json?_page=${page}&_limit=9`);
    setPosts(res.data);
  };
  useEffect(() => {
    loadPosts();
  }, [page]);


  return (
    <div>
      <h1 className="heading_style"> Netflix </h1>
      <CssBaseline />
      <Container component={Box} py={3}>
        <div>
        {posts.map((val) => (
          <div className="cards">
          <div className="card">
              <img src={val.imgSrc} alt="myPic" className="card_img"/>
              <div className="card_info">
                  <span className="card_category">{val.title}</span>
                  <h3 className="card_title">{val.sname}</h3>
                      <a href={val.links} target="blank">
                      <button> Watch Now </button>
                      </a>
              </div>
          </div>
          </div>
        ))}
        </div>
      <Box py={3} display="inline-flex" justifyContent="center" marginLeft="450px">
      <Pagination
          count={4}
          color="secondary"
          size="large"
          onChange={(e, value) => setPage(value)}       
      />
      </Box>
    </Container>
    </div>
  )
};

export default App;
