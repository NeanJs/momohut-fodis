"use client";
import { useState } from "react";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert("Message sent successfully! (Handle submission logic here)");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <BodyWrapper>
      <ContentWrapper className="bg-white rounded-2xl overflow-hidden shadow-lg min-h-[700px] h-[700px]">
        <div className="mx-auto px-6 md:px-12 lg:px-16 bg-white p-8 w-full h-full">
          <h3 className="text-xs font-bold text-primary uppercase tracking-wider text-center">
            Get In Touch
          </h3>
          <h2 className="text-4xl font-bold text-center mt-2">Contact Us</h2>
          <p className="mt-4 text-lg text-center text-gray-600">
            Have any questions? We'd love to hear from you.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Your Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-primary text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform bg-momo_red"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5905976797744!2d-123.11700788734578!3d49.284154370529784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671865b6f8fa3%3A0x6c0ede711be6774!2s622%20W%20Pender%20St%2C%20Vancouver%2C%20BC%20V6G%202S3!5e0!3m2!1sen!2sca!4v1739672210230!5m2!1sen!2sca"
          className="md:w-2/4 h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default ContactForm;
