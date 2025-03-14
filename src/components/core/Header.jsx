import { Facebook, Instagram, Linkedin } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuCrossIcon, menuIcon } from "../../assets";
import { motion, AnimatePresence, animate } from "framer-motion";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <nav className="bg-black z-[999] text-sm px-4 lg:px-20 h-[61px] fixed top-0 left-0 right-0 flex justify-between items-center">
        <Link
          to={"/"}
          className="text-white font-glock font-bold text-xl leading-none"
        >
          Benjamin <br />
          <p className="text-[#8EB486] text-sm tracking-[0.3rem] -mt-0.5">
            Eisenstein Miller
          </p>{" "}
        </Link>
        <div className=" lg:space-x-8 space-x-4 min-[800px]:flex hidden  items-center h-full">
          <ul className="flex lg:space-x-8 space-x-4 text-white">
            <li className="hover:text-[#8EB486]">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#8EB486]">
              {" "}
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#8EB486]">
              {" "}
              <Link to="/multimedia">Multimedia</Link>
            </li>
            <li className="hover:text-[#8EB486]">
              {" "}
              <Link to="/collab">Collaborations</Link>
            </li>
            <li className="hover:text-[#8EB486]">
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="hidden lg:flex space-x-8 items-center text-white">
            <a
              href="https://www.instagram.com/mi11er7ime/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8EB486]"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/benjaminemiller/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8EB486]"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <div className="flex py-4 items-center font-medium border-b-2 border-white text-white bg-[#8EB486] px-8">
            Lorem ipsum dolor sit.
          </div>
        </div>
        <div className="flex items-center min-[800px]:hidden">
          <AnimatePresence exitBeforeEnter initial={false}>
            {isDrawerOpen ? (
              <motion.img
                key="close"
                src={menuCrossIcon}
                alt="Close menu"
                className="w-10 h-10 cursor-pointer"
                onClick={() => setIsDrawerOpen(false)}
                initial={{ opacity: 0, transform: "translateX(100%)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                exit={{
                  opacity: 0,
                  transform: "translateX(-100%)",
                  transition: { duration: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key="menu"
                src={menuIcon}
                alt="Open menu"
                className="w-10 h-10 cursor-pointer"
                onClick={() => setIsDrawerOpen(true)}
                initial={{ opacity: 0, transform: "translateX(100%)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                exit={{
                  opacity: 0,
                  transform: "translateX(-100%)",
                  transition: { duration: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </div>
      </nav>
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 pointer-events-none bg-black/20 z-[1000] min-[800px]:hidden"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed  top-14 left-0 right-0 bottom-0 bg-black  px-6 py-8 flex flex-col justify-between z-[1001] min-[800px]:hidden"
            >
              <ul className="space-y-8 text-center mt-8">
                <li className="hover:text-[#8EB486] text-white text-2xl hover:tracking-[0.5em] text-center transition-all duration-300">
                  <Link to="/about" onClick={() => setIsDrawerOpen(false)}>
                    About
                  </Link>
                </li>
                <li className="hover:text-[#8EB486] text-white text-2xl hover:tracking-[0.5em] text-center transition-all duration-300">
                  <Link to="/blog" onClick={() => setIsDrawerOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li className="hover:text-[#8EB486] text-white text-2xl hover:tracking-[0.5em] text-center transition-all duration-300">
                  <Link to="/multimedia" onClick={() => setIsDrawerOpen(false)}>
                    Multimedia
                  </Link>
                </li>
                <li className="hover:text-[#8EB486] text-white text-2xl hover:tracking-[0.5em] text-center transition-all duration-300">
                  <Link to="/collab" onClick={() => setIsDrawerOpen(false)}>
                    Collaborations
                  </Link>
                </li>
                <li className="hover:text-[#8EB486] text-white text-2xl hover:tracking-[0.5em] text-center transition-all duration-300 ">
                  <Link to="/contact" onClick={() => setIsDrawerOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="flex flex-col justify-center space-y-8 items-center mt-8 relative ">
                <div className="flex items-center justify-center w-full p-8 text-center text-white hover:bg-[#afbfac] bg-[#8EB486] transition-all duration-300">
                  Explore
                  <div className="h-6 w-28 bg-black rotate-45 bottom-16 absolute -left-8   transition-all duration-300" />
                  <div className="h-6 w-28 bg-black rotate-45 top-0 absolute -right-7 " />
                </div>
                <div className="flex space-x-8 items-center">
                  <a
                    href="https://instagram.com/your_handle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#8EB486]"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/your_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#8EB486]"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
