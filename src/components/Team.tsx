"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

const teamMembers = [
  {
    id: 1,
    name: "Anish Thapa",
    role: "Head Chef",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "Restaurant Manager",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Customer Relations",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Pastry Chef",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

export function Team() {
  return (
    <BodyWrapper className="py-16 bg-gray-100">
      <ContentWrapper className="container mx-auto text-center flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6  shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-4 object-cover border-2 border-momo_red"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-gray-500 text-sm">{member.role}</p>

              <div className="flex gap-4 mt-3">
                <a
                  href={member.socials.facebook}
                  className="text-gray-600 hover:text-momo_red transition"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href={member.socials.instagram}
                  className="text-gray-600 hover:text-momo_red transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="text-gray-600 hover:text-momo_red transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default Team;
