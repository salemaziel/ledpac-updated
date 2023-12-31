import React from "react";
import { navigate } from "gatsby";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

//export default function ContactForm() {
const ContactForm = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <>
      <form
        name="ContactForm"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="ContactForm" />

        <Row>
          <Form.Group className="my-2">
            <label style={{ display: "none" }} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="my-2">
            <label htmlFor="email" style={{ display: "none" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </Form.Group>

        </Row>
        <Row>
          <Form.Group className="my-2">
            <label htmlFor="tel" style={{ display: "none" }}>
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="my-2">
            <label htmlFor="textarea" style={{ display: "none" }}>
              Message
            </label>
            <input
              type="textarea"
              name="message"
              id="message"
              placeholder="Message"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group>
          <ul className="actions">
            <li style={{ listStyle: "none" }}>
              <button
                type="submit"
                value="Send Message"
                className="special"
                onChange={handleSubmit}
              >
                Submit{" "}
              </button>
            </li>
          </ul>
        </Form.Group>
      </form>
    </>
  );
}

export default ContactForm
