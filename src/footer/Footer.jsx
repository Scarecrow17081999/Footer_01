// import "./Footer.css";
import React from "react";
import Button from "@mui/material/Button";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import BasicModal from "./Modal";

import Divider from "@mui/material/Divider";
import ChatModal from "./ChatModal";
export default function Footer() {
  return (
    <div id="parentFooterContainer">
      <div id="footerContainer">
        <h1>Contact Us</h1>
        <p>
          Learn how Apportunity's product design and app development services
          can help you build better mobile relationships with your customers.
          Let's Talk About Your Project!.
        </p>
        <BasicModal />
        <div id="contactIcons">
          <div>
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              <LocalPhoneOutlinedIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
          <div>
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              <EmailOutlinedIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
          <div>
            <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
              <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
          <div>
            <a href="#">
              <FacebookIcon sx={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
      <ChatModal />
      <Divider light={true} sx={{ borderBottom: "2px solid white",width:'97%',margin:'auto' }} />
    </div>
  );
}
