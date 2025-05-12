import { Container } from "react-bootstrap";
import React, { useState } from "react";
import { domain } from "../utils/stn";

const ContactMe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [err, setErr] = useState("");

  const sanitizeInput = (input) => {
    // نستخدم تعبيراً منتظماً لإزالة الرموز الخاصة
    return input.replace(/[#$<>&*()][{}]/g, "");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${domain}/api/message/addMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          subject,
          message,
        }),
      });

      const contentType = response.headers.get("Content-Type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        setSuccess("Your message has been sent");

        setTimeout(() => {
          setSuccess("");
        }, 3500);
      } else {
        setErr(data.message || data || "An error occurred, please try again");
        setTimeout(() => {
          setErr("");
        }, 3500);
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contactMe" id="contact">
      <Container className="contactMeContainer">
        <div className="ContactInfo">
          <div className="infoHolder">
            <div className="info_Box_holder">



              <div className="infoBox">

                <div>
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/acydszgh.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>

                  <h2>Chat to us</h2>
                </div>

                <span>Our friendly team is here to help you.</span>
                <p>abdelhadikaba64@gmail.com</p>
              </div>

              <div className="infoBox">
                <div>
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/cjhlqtae.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>

                  <h2>Our geographical location</h2>
                </div>

                <span>Come say hello</span>
                <p>Location Algeria - Algeria  (UTC+01:00)</p>
              </div>

              <div className="infoBox">
                <div>
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/lzhauhfx.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>

                  <h2>Our whatsapp</h2>
                </div>

                <span>WhatsApp number is available to serve you</span>
                <p>+213 774823948 </p>
              </div>
            </div>

            <h2 className="icons_holder">
              <span>
                <a
                  target="blank"
                  href="https://www.facebook.com/profile.php?id=100091746498169"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/lplofcfe.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>

                <a
                  target="blank"
                  href="https://www.instagram.com/acos.web.studio/?hl=ar"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/cuwcpyqc.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/acos-web-studio-701331300/"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/euybrknk.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>
                <a target="blank" href="https://dribbble.com/acos_web_designer">
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/sbhkbqnq.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>
                <a target="blank" href="https://www.behance.net/cosx">
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/hdmufqcq.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#003B33,secondary:#003B33"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>
              </span>
            </h2>
          </div>
        </div>

        <div className="ContactForm">
          <div className="Form_infos">
            <h1>Start now to contact us to get your electronic website</h1>
            <p>We will try to answer all your questions here.</p>
          </div>
          <form className="froms" onSubmit={submitHandler}>
            <div>
              <input
                className="mainForm"
                required
                type="text"
                id="firstName"
                name="firstName"
                onChange={(e) => setFirstName(sanitizeInput(e.target.value))} // تعقيم الإدخال
                placeholder="First Name"
              />
              <input
                className="mainForm"
                required
                type="text"
                id="lastName"
                name="lastName"
                onChange={(e) => setLastName(sanitizeInput(e.target.value))} // تعقيم الإدخال
                placeholder="Last Name"
              />
            </div>

            <div>
              <input
                className="mainForm"
                required
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(sanitizeInput(e.target.value))} // تعقيم الإدخال
                placeholder="Email"
              />
              <input
                className="mainForm"
                required
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(sanitizeInput(e.target.value))} // تعقيم الإدخال
                placeholder="Phone Number"
              />
            </div>

            <div>
              <input
                className="mainForm1"
                required
                type="text"
                id="subject"
                name="subject"
                onChange={(e) => setSubject(sanitizeInput(e.target.value))} // تعقيم الإدخال
                placeholder="Subject"
              />
            </div>

            <div>
              <textarea
                className="mainForm2"
                required
                id="message"
                name="message"
                onChange={(e) => setMessage(sanitizeInput(e.target.value))} // تعقيم الإدخال
                placeholder="Message"
              />
            </div>

            {err && <span className="errorM">{err}</span>}
            <br />
            {success && <span className="successM">{success}</span>}
            <br />
            <button disabled={isSubmitting} className="cta_2" type="submit">
              {isSubmitting
                ? "Your message is being sent..."
                : "Let’s get started"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
