import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Alert, Container, Form, Image } from "react-bootstrap";
import { Pagination } from "swiper/modules";
import OpinionsClient from "./../components/OpinionsClient";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { domain } from "../utils/stn";
import LoadingOpinion from "../components/loading/LoadingOpinion";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import "../style/opinions.css";
import "@splidejs/splide/dist/css/splide.min.css";

import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Opinions = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(null);

  const [clientName, setClientName] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [ratings, setRating] = useState("");
  const [opinion, setOpinionText] = useState("");

  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  // Fetch opinions on component mount
  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const { data } = await axios.get(`${domain}/api/opinion`);
        setOpinions(data);
        setLoading(false);

        const splide = new Splide(".splide", {
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 3,
          gap: "1rem",
          pagination: false,
          arrows: false,
          autoScroll: {
            speed: 1, // سرعة الحركة
            pauseOnHover: false, // لا توقف لما يمر الماوس فوق السلايدر
            pauseOnFocus: false, // لا توقف لما يتم التركيز عليه بالتاب مثلا
          },
          extensions: { AutoScroll }, // ضروري ربط الAutoScroll هنا
        });

        splide.mount({ AutoScroll }); // مهم جدا تمرير AutoScroll هنا أثناء mount
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchOpinions();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sanitizeInput = (input) => {
    // نستخدم تعبيراً منتظماً لإزالة الرموز الخاصة
    return input.replace(/[#$<>&*(){}]/g, "");
  };

  const addOpinion = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const respons = await fetch(`${domain}/api/opinion/addOpinion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName,
          JobTitle,
          ratings,
          opinion,
        }),
      });

      const data = await respons.json();

      setSuccess("Opinion added successfully");
    } catch (error) {
      setErr("Error adding your review:");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "430px",
  };

  return (
    <section className="opinions" id="testimonials">
      {alert && <div className="alert">{alert}</div>}
      
      <div className="opinions_info">
        <Container className="opinion_info_container">
          <div className="opinion_main_info">
            <h5>Some of our customers' opinions and testimonials</h5>
          </div>
        </Container>
      </div>

      <Container className="opinionsContainer">
        <div className="splide" aria-label="Testimonials Slider">
          <div className="splide__track">
            <ul className="splide__list">
              {loading ? (
                <LoadingOpinion />
              ) : error ? (
                <h1 style={{ color: "red" }}>{error}</h1>
              ) : (
                opinions.map((opinion, index) => (
                  <li className="splide__slide" key={index}>
                    <OpinionsClient opinionClient={opinion} />
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </Container>

      <Container>
        <div className="main_info Add_Your_Opinion ">
          <div className="main_btn">
            <Fragment >
              <span className="ctas" onClick={handleOpen}>
                <a>Add Your Opinion</a>
              </span>
              <BootstrapDialog   open={open} onClose={handleClose}>
                <DialogTitle>Add Your Opinion</DialogTitle>
                <IconButton onClick={handleClose}>X</IconButton>
                <DialogContent className="BootstrapDialog">
                  <Form onSubmit={addOpinion}>
                    {err && <span className="errorM">{err}</span>}
                    <br />
                    {success && <span className="successM">{success}</span>}
                    <br />
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={clientName}
                        onChange={(e) =>
                          setClientName(sanitizeInput(e.target.value))
                        }
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Job Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={JobTitle}
                        onChange={(e) =>
                          setJobTitle(sanitizeInput(e.target.value))
                        }
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        type="number"
                        value={ratings}
                        onChange={(e) =>
                          setRating(sanitizeInput(e.target.value))
                        }
                        min="1"
                        max="5"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Your Opinion</Form.Label>
                      <Form.Control
                        as="textarea"
                        value={opinion}
                        onChange={(e) =>
                          setOpinionText(sanitizeInput(e.target.value))
                        }
                        required
                      />
                    </Form.Group>

                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </Form>
                </DialogContent>
              </BootstrapDialog>
            </Fragment>
          </div>
        </div>
      </Container>

      
    </section>
  );
};

export default Opinions;
