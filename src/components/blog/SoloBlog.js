import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SoloBlog = ({ blog }) => {
  return (
    <div>
     
      <div className="blogContainers">
        {blog.length !== 0 ? (
          blog.map((Blog , index) => {
            return (
              <div key={index} className="mb-2 blog_main_box">
                <div className="blogBox">
                  <Image
                    className="blogImg"
                    loading="lazy"
                    src={Blog.image}
                    alt={Blog.title}
                    fluid
                  />

                  <div className="blogInfo">
                    <h6 className="mainTitle">{Blog.category}</h6>

                    <Link className="blog_icon" to={`/Blog/${Blog.slug}`}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No blogs</h3>
        )}
      </div>
    </div>
  );
};

export default SoloBlog;
