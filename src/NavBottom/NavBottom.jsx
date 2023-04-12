import React from "react";
import { useState, useEffect } from "react";
// import { FaUser } from "react-icons/fa";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import "./NavBottom.css";
import { Margin } from "@mui/icons-material";
import Chip from "@mui/material/Chip";
export default function NavBottom() {
  return (
    <>
      <div id="NavBottomParentContainer">
        <div>
          <h2>Customized and Interactive Mobile & Web Solutions </h2>
          <p>
            At CodeHunk Technology, we are focused on enhancing the value of
            your business We offer solutions that give you a competitive edge in
            the online market and a stronger brand image.
          </p>
        </div>
        <div>
          <h2>Platforms we work with</h2>
          <CarouselComponent />
        </div>
      </div>
    </>
  );
}

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      {/* <p class="marquee marquee2">
        <span>
          <CodeOffIcon sx={{ color: "#52a7b8", margin: "1rem" }} />
          {"IOS"}
          <CodeOffIcon sx={{ color: "#52a7b8", margin: "1rem" }} />
          {"PHP"}
          <CodeOffIcon sx={{ color: "#52a7b8", margin: "1rem" }} />
          {"WEB DEVELOPMENT"}
          <CodeOffIcon sx={{ color: "#52a7b8", margin: "1rem" }} />
          {"ReactNative"}
          <CodeOffIcon sx={{ color: "#52a7b8", margin: "1rem" }} />
          {"Hybrid Applications"}
        </span>
      </p> */}
      <div class="wrapper">
        <div class="scroll-container">
          <div class="scroll-text">
            <div class="scroll-item">
              <Chip
                sx={{ padding: "1rem", color: "#a09f97" }}
                icon={
                  <CodeOffIcon
                    color="primary"
                    sx={{ color: "#52a7b8", margin: "2rem" }}
                  />
                }
                label="IOS"
                variant="outlined"
              />
            </div>
            <div class="scroll-item">
              <Chip
                sx={{ padding: "1rem", color: "#a09f97" }}
                icon={
                  <CodeOffIcon
                    color="primary"
                    sx={{ color: "#52a7b8", margin: "2rem" }}
                  />
                }
                label="PHP"
                variant="outlined"
              />
            </div>
            <div class="scroll-item">
              <Chip
                sx={{ padding: "1rem", color: "#a09f97" }}
                icon={
                  <CodeOffIcon
                    color="primary"
                    sx={{ color: "#52a7b8", margin: "2rem" }}
                  />
                }
                label="WEB
              DEVELOPMENT"
                variant="outlined"
              />
            </div>
            <div class="scroll-item">
              <Chip
                sx={{ padding: "1rem", color: "#a09f97" }}
                icon={
                  <CodeOffIcon
                    color="primary"
                    sx={{ color: "#52a7b8", margin: "2rem" }}
                  />
                }
                label="ReactNative"
                variant="outlined"
              />
            </div>
            <div class="scroll-item">
              <Chip
                sx={{ padding: "1rem", color: "#a09f97" }}
                icon={
                  <CodeOffIcon
                    color="primary"
                    sx={{ color: "#52a7b8", margin: "2rem" }}
                  />
                }
                label="Hybrid
              Applications"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
