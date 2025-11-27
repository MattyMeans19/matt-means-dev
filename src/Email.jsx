import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const SERVICE_ID = "service_eenr7ii";
  const TEMPLATE_ID = "template_lc7c8sa";
  const PUBLIC_KEY ="0EQDdfVxVkHmWFaFd";


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="p-5"
    >
        <div className="px-4 w-full p-6">
          <h2 className="lg:text-3xl mb-8 border-10 rounded-3xl border-double bg-white text-center">
            Feel free to reach out for any inquiries or questions about my services!
          </h2>
          <form className="flex flex-col h-fit justify-center gap-5" onSubmit={handleSubmit}>
            <div >
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full border-3 bg-white"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div >
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full border-3 bg-white"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div >
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full border-3 bg-white place-self-center"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="border-5 w-[50%] self-center bg-emerald-700 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
};