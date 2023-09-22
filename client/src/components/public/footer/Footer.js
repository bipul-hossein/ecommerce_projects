import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaHeadphones, FaWhatsapp } from "react-icons/fa";
import logo from "../../../Images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#ffe577]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="">
            <img
              src={logo}
              alt=""
            />
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
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
                className="text-gray-700 transition hover:opacity-75"
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
                className="text-gray-700 transition hover:opacity-75"
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
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:pt-16">
          <div>
            <p className="font-medium text-gray-900">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  1on1 Coaching
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Company Review
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Accounts Review
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  HR Consulting
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Meet the Team
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Accessibility
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Returns Policy
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Contact Us</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="md:flex md:mb-0 gap-2">
                <div className="text-gray-700 mb-2 md:mb-0 transition hover:opacity-75">
                  <FaHeadphones className="text-primary w-10 h-10" />
                </div>
                <div>
                  <p className="text-base font-semibold">Through Whatsapp</p>
                  <h3 className="mt-1 font-bold">+018-3234-5423</h3>
                </div>
              </li>

              <li>
                <p className="text-gray-700 transition hover:opacity-75">
                  No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                </p>
              </li>
              <li>
                <p className="text-gray-700 transition hover:opacity-75">
                  E-Mail: info@example.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-700">
         2023. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
