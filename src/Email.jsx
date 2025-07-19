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
      className="flex items-center justify-center p-5 size-full bg-white absolute top-0"
    >
        <div className="px-4 w-full p-6">
          <h2 className="text-3xl mb-8 border-10 rounded-3xl border-double syscolor-Border text-center">
            Feel free to reach out for any inquiries or questions about my services!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full border-3 syscolor-Border"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full border-3 syscolor-Border"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full border-3 syscolor-Border place-self-center"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="border-5 w-full syscolor"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
};