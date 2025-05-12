import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
const FAQs = () => {
  return (
    <section className="FAQs" id="FAQs">
      <Container className="FAQsContainer">
        <div className="FAQsInfo">
          <h6 className="sectionTitle">- FAQs </h6>
          <h1 className="mainTitle">Questions ? <span>Look</span> here </h1>
          <p className="mainParagraph">
            We will try to answer all your questions here
          </p>
        </div>

        <>
          <Accordion className="AccordionBox" style={{ backgroundColor: '#e56543' }}>
            <Accordion.Item eventKey="0" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>introduction</h4>
              </Accordion.Header>
              <Accordion.Body className="AccordionBody">
                We seek to provide high-quality services to our customers and
                achieve their complete satisfaction. Therefore, we have
                established these policies to ensure smooth and efficient
                workflow, and to preserve the rights of all parties involved.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>Service renewal policy ?</h4>
              </Accordion.Header>
              <Accordion.Body>
                1 The customer can renew the service under annual, semi-annual,
                quarterly or monthly contracts.
                <br />
                2 The cost of renewal is specified in the contract
                <br />
                3 The customer must provide written notice of his desire to
                renew his website 14 days before the expiration of the current
                contract.
                <br />4 If the customer does not provide notice, the services
                will be considered expired.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>Amendments policy ?</h4>
              </Accordion.Header>
              <Accordion.Body>
                1 Clients are allowed to make limited modifications (depending
                on the offer) to the work requested.
                <br />
                2 Additional fees apply for any additional modifications.
                <br />
                3 Required modifications must be communicated to the company
                within 5 days of receipt of the work.
                <br />4 The client is deemed to have surrendered his rights to
                request any amendment 6 days after receiving the work.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>Information provision policy ?</h4>
              </Accordion.Header>
              <Accordion.Body>
                1 Customers must provide all required information within 5 days
                from the date of their request.
                <br />
                2 If the customer is late in submitting the information beyond
                the specified period, a notification will be sent to him of the
                necessity of submitting the information within an additional 2
                days.
                <br />3 If the client does not provide the required information
                within the specified period, the company has the right to cancel
                the project without any obligations towards the client..
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>Payment policy ?</h4>
              </Accordion.Header>
              <Accordion.Body>
                1 A down payment of 50% of the total cost must be paid upon
                agreement
                <br />
                2 The second payment of 50% of the total cost must be paid upon
                delivery of the work
                <br />
                3 Required modifications must be communicated to the company
                within 5 days of receipt of the work.
                <br />4 In cases of renewal (see the services renewal policy),
                the full amount must be paid 100% when requesting renewal
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>Complaints policy ?</h4>
              </Accordion.Header>
              <Accordion.Body>
                1 Complaints must be submitted within 30 days of receipt of work
                <br />
                2 Complaints will be investigated and appropriate action will be
                taken
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>Termination policy ?</h4>
              </Accordion.Header>
              <Accordion.Body>
                1 Customers can terminate the service at any time provided that
                the amounts due are paid.
                <br />
                2 The company can terminate the service if the customer does not
                comply with the policies
                <br />
                3 In the event that a customer's service is terminated due to a
                violation of policies, the company does not bear any obligations
                towards him, including paying dues
                <br />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" className="AccordionItem">
              <Accordion.Header className="AccordionHeader">
                <h4>Conclusion</h4>
              </Accordion.Header>
              <Accordion.Body>
                We hope that these policies will help maintain a positive
                relationship between us and our customers. We are committed to
                providing the best possible services to our customers.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      </Container>
    </section>
  );
};

export default FAQs;
