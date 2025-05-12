import { Container } from "react-bootstrap";
import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

const SkillsAndExpertise = () => {
  return (
    <section className="experience" id="experience">
      <Container className="experience">
        <div className="experience_holder">
          <h1 className="h1_1">Our experience,</h1>

          <div className="experience_box">
            <Tooltip
              className="Tooltip"
              title="Working on large websites and platforms that require attention to detail and that require specialization, programming, and great care."
              followCursor
            >
              <Box>
                <span>Web Development</span>
              </Box>
            </Tooltip>

            <Tooltip
              className="Tooltip"
              title="Using one of the best CSM platforms that creates modern and practical websites for entrepreneurs who want to keep up with the market"
              followCursor
            >
              <Box>
                <span>Framer Design</span>
              </Box>
            </Tooltip>

            <Tooltip
              className="Tooltip"
              title="More than 3+ years of experience designing user experiences and interfaces for various digital platforms."
              followCursor
            >
              <Box>
                <span>UI/UX Design</span>
              </Box>
            </Tooltip>

            <Tooltip
              className="Tooltip"
              title="More than 2+ years of experience helping website owners improve their website rankings and achieve their goals."
              followCursor
            >
              <Box>
                <span>SEO Support</span>
              </Box>
            </Tooltip>

            <Tooltip
              className="Tooltip"
              title="Working on more than 60 different projects, make your project one of them"
              followCursor
            >
              <Box>
                <span>+60 Completed project</span>
              </Box>
            </Tooltip>
          </div>

          <h1 className="h1_1">Our knowledge. </h1>

          <h3>
            Learn from our <span>knowledge</span> and <span>experiences</span>{" "}
            to get a better idea about us
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default SkillsAndExpertise;
