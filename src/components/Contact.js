import React, { useEffect, useRef, useReducer } from "react";
import { Fade } from "react-reveal";
import emailjs from "@emailjs/browser";

import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";

import { useInfos } from "../contexts/InfoProvider";

const initialFieldValues = {
  message: "",
  name: "",
  email: "",
  phone: "",
};

const Contact = () => {
  const textareaRef = useRef(null);
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    initialFieldValues
  );
  const { setSizes } = useInfos();

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const onScroll = () => {
      const { bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const howVisible = bottom / windowHeight;
      if (howVisible > 0.4 && howVisible < 1.3) {
        setSizes({ contact: howVisible });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    console.log(state);
    if (2 + 2 === 4) return;

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", state, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          // show the user a success message
          alert("Message submited");
          setState(initialFieldValues);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  useEffect(() => {
    textareaRef.current.style.height = "200px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [state.message]);

  return (
    <section id="contact" ref={sectionRef}>
      <Fade bottom duration={1000}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <div className="containerContact">
              <EmailIcon fontSize="inherit" htmlColor="#fff" />
              <span className="textContact">Get In Touch</span>
            </div>
          </Grid>
        </Grid>
      </Fade>

      <Fade buttom duration={1000}>
        <div className="contact-wrap">
          <form onSubmit={handleSubmit}>
            <div className="rowForm">
              <div className="colForm">
                <div className="form-group">
                  <input
                    type="text"
                    value={state.name}
                    required
                    placeholder="Name"
                    size="35"
                    id="contactName"
                    name="contactName"
                    className="form-control"
                    onChange={(e) => setState({ name: e.target.value })}
                  />
                </div>
              </div>
              <div className="colForm">
                <div className="form-group">
                  <input
                    type="email"
                    value={state.email}
                    required
                    placeholder="Email"
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    className="form-control"
                    onChange={(e) => setState({ email: e.target.value })}
                  />
                </div>
              </div>
              <div className="colForm">
                <div className="form-group">
                  <input
                    type="phone"
                    value={state.phone}
                    placeholder="Phone"
                    size="35"
                    id="contactPhone"
                    name="contactPhone"
                    className="form-control"
                    onChange={(e) => setState({ phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="colForm">
                <div className="form-group">
                  <textarea
                    onChange={(e) => setState({ message: e.target.value })}
                    ref={textareaRef}
                    required
                    placeholder="Message"
                    className="form-control customTextarea"
                    id="contactMsg"
                    name="contactMsg"
                    value={state.message}
                  />
                </div>
              </div>
            </div>
            <div className="rowForm">
              <input type="submit" value="Submit" className="submitForm" />
            </div>
          </form>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
