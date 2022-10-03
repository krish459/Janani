import React from "react";
import "../HomePage/CSS/CategoriesCard.css";
import Rating from "../CoursePage/Rating";
import { Dropdown } from "bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";

const JobCards = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show_alert, setShow_alert] = useState(false);
  if (show_alert) {
    return (
      <div className="App">
        <Container className="p-4">
          <Alert
            variant="success"
            onClose={() => setShow_alert(false)}
            dismissible
            // style={{ width: "30rem", height: "2rem" }}
          >
            <Alert.Heading>Congratulations!!!!</Alert.Heading>
            <p> Your resume is been sent to the company.</p>
          </Alert>
        </Container>
      </div>
    );
  }
  return (
    <>
      <div class="my-card">
        <div class="card" style={{ width: "18rem", height: "28rem" }}>
          <img
            class="card-img-top"
            src={props.img}
            alt="Card image cap"
            style={{ height: "11rem" }}
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <h3 class="card-title">{props.company}</h3>
            <p class="card-text">{props.description}</p>
            {props.skill?.map((item) => (
              <span class="badge badge-pill badge-all mx-2 ">{item}</span>
            ))}
            <h3 class="card-title">{props.category}</h3>
            <h5 class="card-info">Upto ₹{props.salary}</h5>

            <div className="align-bottom">
              <a
                href="#"
                class="btn btn-primary bottom align-self-end mx-2"
                onClick={() => {
                  setShow(true);
                }}
              >
                Description
              </a>
              <a
                href="#"
                onClick={() => {
                  setShow_alert(true);
                }}
                class="btn btn-primary bottom align-self-end"
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img className="card-img-top img-fluid" src={props.img} alt="..." />
          </div>

          <h4 className="my-2">Description:</h4>
          {props.description}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JobCards;
