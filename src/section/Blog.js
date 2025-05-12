import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SoloBlog from "../components/blog/SoloBlog";
import axios from "axios";
import { domain } from "./../utils/stn";
import Loading from "../components/loading/LoadingBlog";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/blog`);
        setBlog(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchBlog(); 
  }, []);

  return (
    <section id="blog" className="blog">
      <Container className="blogContainer">
        <div className=" blog_main_info">
          <h1>
            Welcome to <br />
            our blog
          </h1>
          <p>
          Watch the latest developments in the world of digital collage development exclusively on our blog.
          </p>
        </div>

        
        <Link to="/Blog" className="cta_2">
          Check out our blog
        </Link>
        <div className="blogHolder">
        {loading ? (
            <Loading />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <SoloBlog blog={blog.slice(0, 4)}></SoloBlog>
          )}
        </div>
      </Container>
    </section>
  );
};
export default Blog;

// <div className="main_btn">
//             <Link to="/Blog" className="mainBtn1">
//             Check out our blog
//             </Link>
//             <a href="#contact" className="mainBtn2">
//               Learn More
//             </a>
//           </div>
