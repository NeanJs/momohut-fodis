"use client";
import { useEffect, useState } from "react";

import { FaMapPin as MapPin } from "react-icons/fa";

const ContactPage = () => {
  // Form state handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Contact Section */}
      <section className="section bg-white py-20">
        <div className="container mx-auto">
          {/* Section Header */}

          {/* Map Section */}
          <div className="mb-16 animate-on-scroll">
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.590544899299!2d-123.11700738736265!3d49.28415537052974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671865b66175d%3A0x439c21a5866d5a53!2s622%20W%20Pender%20St%2C%20Vancouver%2C%20BC%20V6G%202S3!5e0!3m2!1sen!2sca!4v1741822771127!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 z-10"
                title="Restaurant Location"
              ></iframe>

              {/* Fallback in case iframe doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-0">
                <div className="text-center p-6">
                  <MapPin size={48} className="mx-auto mb-4 text-orange-500" />
                  <h3 className="text-xl font-medium mb-2">Saino Restaurant</h3>
                  <p className="text-gray-600">
                    622 W Pender St, Vancouver, BC
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <div className="bg-fodis-gray rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#5186FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12H16.5M12 7.5V12"
                          stroke="#5186FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">
                        Our Office Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9AM - 5PM
                      </p>
                      <p className="text-gray-600">Saturday: 10AM - 2PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                          stroke="#5186FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                          stroke="#5186FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Our Location</h4>
                      <p className="text-gray-600">622 W Pender St</p>
                      <p className="text-gray-600">Vancouver, BC V6G2S3</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                          stroke="#5186FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 6L12 13L2 6"
                          stroke="#5186FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email Us</h4>
                      <p className="text-gray-600">sainorestaurant@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5902 20.9046 21.7335 20.6407 21.8221C20.3769 21.9107 20.0974 21.9425 19.82 21.9151C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77383 17.3148 6.72534 15.2663 5.19 12.8501C3.49998 10.2413 2.44824 7.27109 2.12999 4.1801C2.10256 3.90356 2.1338 3.62486 2.22153 3.36172C2.30926 3.09859 2.45204 2.85679 2.63969 2.65172C2.82734 2.44665 3.05475 2.28281 3.30827 2.17062C3.5618 2.05843 3.83577 2.00036 4.11 2.0001H7.11C7.59531 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04208 3.23954 9.11 3.7201C9.23654 4.68016 9.47019 5.62282 9.81 6.5301C9.94454 6.88802 9.97366 7.27701 9.89391 7.65098C9.81415 8.02494 9.62886 8.36821 9.36 8.6401L8.09 9.9101C9.51356 12.4136 11.5865 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9752 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5299 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.92Z"
                          stroke="#5186FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-fodis-blue transition-all duration-300 hover:bg-fodis-blue hover:text-white"
                      aria-label="Facebook"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-fodis-blue transition-all duration-300 hover:bg-fodis-blue hover:text-white"
                      aria-label="Twitter"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-fodis-blue transition-all duration-300 hover:bg-fodis-blue hover:text-white"
                      aria-label="Instagram"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-fodis-blue transition-all duration-300 hover:bg-fodis-blue hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="form-head">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="section-subtitle  font-semibold text-3xl">
                    Get In Touch
                  </span>

                  <p className="text-gray-600">
                    Have a question or want to work with us? Feel free to reach
                    out. We'd love to hear from you!
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-sm p-8 border border-gray-100"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fodis-blue/50 focus:border-fodis-blue/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fodis-blue/50 focus:border-fodis-blue/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fodis-blue/50 focus:border-fodis-blue/50"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fodis-blue/50 focus:border-fodis-blue/50"
                    placeholder="Your message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-momo_red text-white px-2 py-4 hover:bg-red-700"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
