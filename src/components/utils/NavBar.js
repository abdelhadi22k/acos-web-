import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const [expanded, setExpanded] = useState(false); // <-- لإدارة حالة الفتح/الإغلاق

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY <= lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveLink(sectionId);
          window.history.pushState(null, "", `#${sectionId}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    window.history.pushState(null, "", `#${id}`);
    setExpanded(false); // <-- إغلاق القائمة بعد النقر
  };

  return (
    <Navbar
      expand=""
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`bg-body-tertiary Navbar ${showNavbar ? "show" : "hide"}`}
    >
      <Container>
        <Navbar.Brand>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick("home")}
          >
            <img alt="logoBrand" src="sources/svg/main logo w 3.svg" />
            <div></div>
          </ScrollLink>
        </Navbar.Brand>

        <div className="toggle_holder">
          <Navbar.Toggle
            className="custom-icon"
            aria-controls="responsive-navbar-nav"
          >
            <span>
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/jectmwqf.json"
                trigger="hover"
                colors="primary:#888888 , secondary:#888888"
                stroke="bold"
                style={{ width: "48px", height: "48px" }}
              ></lord-icon>
            </span>
          </Navbar.Toggle>

          <ScrollLink
            className={`cta ${activeLink === "contact" ? "active" : ""}`}
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick("contact")}
          >
          Let's start
          </ScrollLink>
        </div>

        <Navbar.Collapse className="linkCollapse" id="responsive-navbar-nav">
          {/* زر إغلاق القائمة */}
          <button
            className="close-menu"
            onClick={() => setExpanded(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              position: "absolute",
              top: 10,
              right: 20,
              cursor: "pointer",
              color: "#f5f5f5",
              zIndex: 1000,
            }}
          >
            ×
          </button>

          <Nav className="linkContainer">
            {[
              { id: "about", label: "About Us" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "testimonials", label: "Testimonials" },
              { id: "blog", label: "Blog" },
            ].map((link) => (
              <ScrollLink
                key={link.id}
                className={`mainLink ${activeLink === link.id ? "active" : ""}`}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </ScrollLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
