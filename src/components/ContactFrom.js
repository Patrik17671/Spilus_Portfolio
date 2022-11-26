import React from 'react';
import styled from "styled-components";
import {useFormik} from "formik";
import * as yup from "yup";
import emailjs  from 'emailjs-com';

const ContactForm = () => {


    function sendEmail() {
        emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `template_2b6cros`,
            `#contact-form`,
            `${process.env.REACT_APP_USER_ID}`
        ).then(res=>{
            console.log(res);
            document.querySelector(".succes").classList.add("show");
            (function hide(){
                setTimeout(function (){
                    document.querySelector(".succes").classList.remove("show");
                }, 3000)
            }());
        }).catch(err=> {
            console.log(err)
            document.querySelector(".error").classList.add("showError");
            (function hide(){
                setTimeout(function (){
                    document.querySelector(".error").classList.remove("showError");
                }, 3000)
            }());
        });

    }

    const validationSchema = yup.object({
        name: yup.string().required("Zabudol si na meno."),
        user_email: yup.string().email("Skús zadať správny email").required("Ani bez emailu to nepôjde =)."),
        message: yup.string().required("A správa je kde ?")
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            user_email: "",
            message: ""
        },
        onSubmit:(values => {
            console.log(JSON.stringify(values))
            sendEmail();
            formik.resetForm();
        }),
        validationSchema: validationSchema,

    });


    return (
        <StyledForm>
          <form id="contact-form" onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Meno</label>
              <input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ?
              <p className="error">{formik.errors.name}</p> : null
              }
              <label htmlFor="user_email">Email</label>
              <input
                  id="user_email"
                  name="user_email"
                  type="text"
                  value={formik.values.user_email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
              />
              {formik.touched.user_email && formik.errors.user_email ?
                  <p className="error">{formik.errors.user_email}</p> : null
              }
              <label htmlFor="message">Správa</label>
              <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
              />
              {formik.touched.message && formik.errors.message ?
                  <p className="error">{formik.errors.message}</p> : null
              }
              <button type="submit">Odoslať</button>
              <div className="succes"><p>Odloslané</p></div>
              <div className="errorMsg"><p>Nepodarilo sa Odoslať</p></div>
          </form>
        </StyledForm>
    );
};

const StyledForm = styled.div`
  color: #8d8b8b;
  form {
    display: flex;
    flex-direction: column
  }
  input, textarea {
    background: transparent;
    border: 2px solid #8d8b8b;
    border-radius: 0.4rem;
    color: #8d8b8b;
    font-size: 1rem;
    padding: 0.2rem;
    width: 100%;
    margin-bottom: 0.5rem;

    &:focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    background: transparent;
    border: 2px solid #F9004DFF;
    color: #F9004DFF;
    font-size: 1rem;
    height: 2.5rem;
    border-radius: 0.4rem;
    margin-top: 1rem;
    transition: all 0.2s linear;
    &:hover {
      transform: translateY(-0.2rem);
    }
    &:active {
      transform: translateY(0.1rem);
      background: rgba(249, 0, 77, 0.3);
    }
  }
  .error {
    color: #f90000;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .succes {
    background: #3cb931;
    color: black;
    text-align: center;
    padding: 0.5rem 0;
    border-radius: 0.4rem;
    margin-top: 1rem;
    display: none;
  }

  .errorMsg {
    background: #de1a1a;
    color: black;
    text-align: center;
    padding: 0.5rem 0;
    border-radius: 0.4rem;
    margin-top: 1rem;
    display: none;
  }

  .show {
    display: block;
  }

  .showError {
    display: block;
  }
`;

export default ContactForm;
