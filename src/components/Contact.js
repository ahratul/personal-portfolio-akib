import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import contactImg from "../assets/img/contact-img.svg";

// Define the Contact component
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_glfq6o5", // Replace with your service ID
        "template_uxpck7l", // Replace with your template ID
        form.current,
        "LX9xp8eYqhyFFnVX0" // Replace with your public API key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log("Message sent:", result.text);
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
          console.error("Message send error:", error.text);
        }
      );
  };

  return (
    <StyledContactSection>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={contactImg} alt="Contact Me" />
          </div>
          <div className="col-md-6">
            <StyledContactForm>
              <h2>Contact Me</h2>
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user_name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" required />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
                <button type="submit">Send</button>
              </form>
            </StyledContactForm>
          </div>
        </div>
      </div>
    </StyledContactSection>
  );
};

export default Contact;

// Styled Components
const StyledContactSection = styled.section`
  padding: 50px 0;
  background: linear-gradient(135deg, #AA367C -5.91%, #4A2FBD);

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

const StyledContactForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    label {
      margin-top: 1rem;
      color: #000; /* Set label color to black */
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-top: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;

      &:focus {
        border: 2px solid #f9690e;
      }
    }

    textarea {
      resize: none;
      min-height: 100px;
    }

    button {
      margin-top: 1rem;
      background: #007bff; /* High-contrast blue */
      color: #ffffff; /* White text for readability */
      border: 2px solid #0056b3; /* Border to increase visibility */
      cursor: pointer;
      padding: 15px 25px; /* Larger padding for better visibility */
      border-radius: 10px; /* Slightly rounded corners for style */
      font-weight: bold; /* Bold text for better visibility */
      font-size: 18px; /* Increased font size */
      transition: background-color 0.3s ease, transform 0.2s ease;
      text-align: center; /* Ensure the text is centered */
      width: 100%; /* Full width for better click area */
      display: inline-block; /* Ensures it's treated as an inline block */
      outline: 3px solid #333; /* Outline to check visibility */
      
      &:hover {
        background: #0056b3; /* Darker shade for hover effect */
        transform: scale(1.05); /* Slightly enlarge on hover for better focus */
      }
    }
  }

  h2 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
`;
