import {  Locate, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils"
import submitMessage from "../services/customerMessage";

function ContactSection() {
  const customerEmail = useRef();
  const customerFullName = useRef();
  const customerPhone = useRef();
  const customerMessage = useRef();
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [NameRequired, setFirstNameRequired] = useState("");
  const [phoneNumberRequired, setPhoneNumberRequired] = useState("");
  const [yourMessageRequired, setYourMessageRequired] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = customerFullName.current.value;
    const email = customerEmail.current.value;
    const phone = customerPhone.current.value;
    const message = customerMessage.current.value;
    let valid = true;

    // customer email
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    // customer first name
    if (!name) {
      setFirstNameRequired("Name is required");
      valid = false;
    } else {
      setFirstNameRequired("");
    }
    // phone number
    if (!phone) {
      setPhoneNumberRequired("Phone number is required");
      valid = false;
    } else {
      setPhoneNumberRequired("");
    }
    // message
     if (!message) {
       setYourMessageRequired("Your message is required");
       valid = false;
     } else {
       setYourMessageRequired("");
     }

    // if the form is invalid don't submit
    if (!valid) {
      return;
    }
    // if the form is valid submit
    const messageData = {
      name,
      email,
      phone,
      message
    };
    try {
      const response = await submitMessage(messageData);
      if (response.error) {
        setServerError(response.error);
      } else {
        setSuccess(true);
        setServerError("");
        // reset the form
        customerFullName.current.value = "";
        customerEmail.current.value = "";
        customerPhone.current.value = "";
        customerMessage.current.value = "";
      }
    } catch (error) {
      setServerError("An error occurred while submitting the message.");
      console.error("Error submitting message:", error);
    }
  }

   useEffect(() => {
     if (success) {
       const timer = setTimeout(() => {
         setSuccess(""); // clear the message after 3 seconds
       }, 3000);

       return () => clearTimeout(timer); // cleanup if component unmounts
     }
   }, [success]);
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="mb-4 text-3xl font-semibold">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=cherrefera@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    cherrefera@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+251921148181"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    +251921148181
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-foreground hover:text-primary transition-colors duration-300">
                    Addis Ababa, Ethiopia
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/chernet-asfaw-55221b162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andro"
                  target="_blank"
                >
                  <FaLinkedinIn size={25} />
                </a>
                <a href="" target="_blank">
                  <FaXTwitter size={25} />
                </a>
                <a
                  href="https://www.instagram.com/cherasfaw6?utm_source=qr&igsh=N3kxa3prd2wxYWpw"
                  target="_blank"
                >
                  <FaInstagram size={25} />
                </a>
                <a href="https://t.me/cherAsfaw" target="_blank">
                  <FaTelegram size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 shadow-xs rounded-lg">
            <h1 className="text-2xl text-foreground font-semibold mb-6">
              Send a Message
            </h1>
            {success && (
              <div className="p-3 rounded-md bg-green-100 text-green-700 mb-3">
                message submitted successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              {serverError && (
                <div className="p-3 rounded-md bg-red-100 text-red-700 mb-3">
                  {serverError}
                </div>
              )}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold mb-2 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={customerFullName}
                  placeholder="Chernet Asfaw..."
                  className="w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
                {NameRequired && (
                  <div className="text-red-500 text-sm mt-1">
                    {NameRequired}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold mb-2 block"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  ref={customerEmail}
                  placeholder="cher@gmail.com"
                  className="w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
                {emailError && (
                  <div className="text-red-500 text-sm mt-1">{emailError}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold mb-2 block"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  ref={customerPhone}
                  placeholder="+251-912345678"
                  className="w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
                {phoneNumberRequired && (
                  <div className="text-red-500 text-sm mt-1">
                    {phoneNumberRequired}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold mb-2 block"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={customerMessage}
                  placeholder="hello, I'd like talk about..."
                  className="w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
                {yourMessageRequired && (
                  <div className="text-red-500 text-sm mt-1">
                    {yourMessageRequired}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
