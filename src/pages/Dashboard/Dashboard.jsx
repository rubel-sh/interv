import React from "react";
import Container from "../../components/Container/Container";

const Dashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const imagelink = form.imageLink.value;
    const blogTitle = form.blogTitle.value;
    const blogDesc = form.blogDesc.value;
    const formData = { imagelink, blogTitle, blogDesc };

    console.log(formData);
  };

  return (
    <Container>
      <h1 style={{ padding: "20px 0" }}>Create Blog</h1>
      <form onSubmit={handleSubmit} className="blogPostForm">
        <input
          type="text"
          placeholder="paste your blog image link"
          name="imageLink"
        />
        <input type="text" placeholder="Blog Title" name="blogTitle" />
        <input type="text" placeholder="Blog Descriptions" name="blogDesc" />
        <button>Publish</button>
      </form>
    </Container>
  );
};

export default Dashboard;
