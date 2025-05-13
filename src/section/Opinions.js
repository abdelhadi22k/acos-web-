import React, { useEffect, useState } from "react";
import { Container, Form, Button, Alert, Image } from "react-bootstrap";
import axios from "axios";
import { domain } from "../utils/stn";
import { Pagination, Stack } from "@mui/material";
import OpinionsClient from "./../components/OpinionsClient";
import LoadingOpinion from "../components/loading/LoadingOpinion";

const Opinions = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [opinionsPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const { data } = await axios.get(`${domain}/api/opinion`);
        setOpinions(data);
        setLoading(false);
        setTotalPages(Math.ceil(data.length / opinionsPerPage)); // حساب عدد الصفحات
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchOpinions();
  }, []);

  // حساب بداية ونهاية العناصر التي سيتم عرضها
  const indexOfLastOpinion = currentPage * opinionsPerPage;
  const indexOfFirstOpinion = indexOfLastOpinion - opinionsPerPage;
  const currentOpinions = opinions.slice(indexOfFirstOpinion, indexOfLastOpinion);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <section className="opinions" id="testimonials">

      {error && <Alert variant="danger">{error}</Alert>}
      


      <Container className="opinion_info_container">
        <div className="opinion_main_info">
          <h5>Some of our customers' opinions and testimonials</h5>
        </div>
      </Container>
   

      <Container className="opinionsContainer">
       

        {loading ? (
          <LoadingOpinion />
        ) : (
          <div className="opinions-list">
            {currentOpinions.map((opinion, index) => (
              <OpinionsClient key={index} opinionClient={opinion} />
            ))}
          </div>
        )}

        {/* Pagination Component */}
        <Stack spacing={2} mt={3} mb={2} alignItems="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size="small"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",            // لون النص
                borderColor: "white",      // لون الحدود
              },
              "& .Mui-selected": {
                backgroundColor: "white",  // لون الخلفية عند التحديد
                color: "#008f8f",          // لون النص عند التحديد
              },
              "& .MuiPaginationItem-ellipsis": {
                color: "white",            // لون علامات ...
              }
            }}
          />
        </Stack>
      </Container>
    </section>
  );
};

export default Opinions;
