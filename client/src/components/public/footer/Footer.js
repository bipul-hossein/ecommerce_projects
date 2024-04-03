import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaHeadphones, FaWhatsapp } from "react-icons/fa";
import logo from "../../../Images/Logo/egonj_logo3.png";

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-90">
      <div className=" max-w-[1200px] mx-auto md:mx-auto space-y-8 pt-8 md:pt-16 pb-10 md:pb-0 lg:space-y-16">
        <div className="px-5">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="">
              <p className="text-white text-xl">Follow Us</p>
            </div>
            <ul className="mt-4 flex pb-4 justify-start gap-6 sm:mt-0 sm:justify-end">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <BsFacebook className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <FiInstagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <AiOutlineTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">WhatsApp</span>
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 md:justify-between gap-8 border-t border-gray-100 pt-4 md:pt-8 lg:pt-16">
              <div>
                <p className="text-xl font-medium text-white">Customer Care</p>
                <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Help Line
                    </a>
                    <a
                      href="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Contacts Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-medium text-white">Egonj</p>
                <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-white transition hover:opacity-75"
                    >
                      About Egonj
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Egonj Donates
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-medium text-white">Contact Us</p>

                <ul className="mt-6 space-y-3 md:space-y-4 text-sm">
                  <li className="md:flex md:items-center md:mb-0 gap-2">
                    <div className="text-white mb-2 md:mb-0 transition hover:opacity-75">
                      <FaHeadphones className="text-white w-10 h-10" />
                    </div>
                    <div className="text-white">
                      <p className="text-sm font-semibold ">Through Whatsapp</p>
                      <h3 className="mt-1 font-bold">01728-525953</h3>
                    </div>
                  </li>

                  <li>
                    <p className="text-white transition hover:opacity-75">
                      Jashore,Bangladesh
                    </p>
                  </li>
                  <li>
                    <p className="text-white transition hover:opacity-75">
                      E-Mail: info@example.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="bg-gray-300 md:bg-primary text-xs md:text-sm text-black p-7 text-center">
          <span className="text-base px-1 rounded-full border-[1px] border-black">
            c
          </span>
          2024 Egonj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
