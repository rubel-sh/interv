import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Container from "../../components/Container/Container";

const Homepage = () => {
  const [blogsData, setBlogsData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/blogs");
    const data = await response.json();
    setBlogsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <div className="blogs">
        {/* Looping */}

        <BlogCard />
      </div>
    </Container>
  );
};

export default Homepage;
