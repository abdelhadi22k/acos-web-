import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import NavProject from "../components/product/NavProject";
import Project from "../components/product/Project";
import LoadingProject from "../components/loading/LoadingProject";
import { domain } from "../utils/stn";

const Projects = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fullscreenPanel, setFullscreenPanel] = useState(false);

  // جلب التصنيفات
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await axios.get(`${domain}/api/project/categories`);
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }
    fetchCategories();
  }, []);

  // جلب المشاريع
  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data } = await axios.get(`${domain}/api/project`);
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // فلترة المشاريع حسب التصنيف المحدد
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);

  // التعامل مع اختيار التصنيف
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setFullscreenPanel(true); // عرض نافذة fullscreen عند الضغط
  };

  // غلق نافذة fullscreen
  const closeFullscreenPanel = () => {
    setFullscreenPanel(false);
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <div className="projects_main_info">
          <h5>Take a look at some of our past work</h5>
        </div>

        <div className="project_Container">
          <div className="projectNavbar">
            <NavProject
              showCategory={handleCategorySelection}
              allCat={categories}
            />
          </div>

          <div className="projectHolder">
            {loading ? (
              <p>.</p>
            ) : (
              <div
                className={`projectList ${fullscreenPanel ? "hide" : ""}`}
              ></div>
            )}
          </div>
        </div>

        {/* Fullscreen Panel */}
        {fullscreenPanel && (
          <div className="fullscreenPanel" onClick={closeFullscreenPanel}>
            <div className="panelContent" onClick={(e) => e.stopPropagation()}>
              <h2 className="panelContent_h2"> {selectedCategory} Project</h2>
              <div className="scrollableProjects">
                <Project project={filteredProjects} />
              </div>
            </div>
          </div>
        )}
        <div className="ctas">
          <a href="#contact">Let’s Get Started</a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
