import {  Locate, Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

function ContactSection() {
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
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
