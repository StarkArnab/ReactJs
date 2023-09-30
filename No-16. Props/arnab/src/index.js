import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Card
      imgsrc="https://imgs.search.brave.com/D8qLA6IQJz-nTGBkEaxIhdkXtcylR-zaS6KZD16KKjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGlzcGxhdGUu/Y29tLzg1N3gxMjAw/L2Rpc3BsYXRlLzIw/MTgtMDItMjIvY2Ew/Y2UwZTAxOTc0OTEw/ZDJiYjk4NTI2ZmE4/Y2Y1NmZfYjU3ZTYw/NzlkMzMyODViNDZk/ZGQzYjExZjcyZGQx/NzUuanBn"
      title="A netflix Original"
      name="DARK"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://imgs.search.brave.com/JSAls_YMk80I6AtlY02CcFG4BRQJ2t614oF7Wo9MJOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXVyb3Bvc3RlcnMu/ZXUvaW1hZ2UvMzUw/L3Bvc3RlcnMvc3F1/aWQtZ2FtZS1jcm93/ZC1pMTIwMDEyLmpw/Zw"
      title="A netflix Original"
      name="Squid Games"
      link="https://www.netflix.com/in/title/81040344"
    />
    <Card
      imgsrc="https://imgs.search.brave.com/nHGxZDk18a13FG2GEcXIBlIZX5aN2QjSJb9KpLeJjOg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZXNp/emluZy5mbGl4c3Rl/ci5jb20vODVNOGdJ/R01FN2xBQ3hEc3JJ/Q1ZMSmRFTkN3PS8y/MDZ4MzA1L3YyL2h0/dHBzOi8vcmVzaXpp/bmcuZmxpeHN0ZXIu/Y29tL0N2MnNCZmRV/S2RFSFkyb1R0a21H/WE92STdpbz0vZW1z/LmNISmtMV1Z0Y3kx/aGMzTmxkSE12ZEha/elpYSnBaWE12VWxS/VVZqTXhOVGMxTmk1/M1pXSnc"
      title="A netflix Original"
      name="Sacred Games"
      link="https://www.netflix.com/in/title/80115328"
    />
    <Card
      imgsrc="https://imgs.search.brave.com/Sz6EL-KSQGnyvXAKfIBMS0AhU9AhbD_1_oQoejXG5TM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aW1hZ2VzLmV4cHJl/c3MuY28udWsvaW1n/L2R5bmFtaWMvMjAv/NTkweC9zZWNvbmRh/cnkveW91LW5ldGZs/aXgtc2Vhc29uLTIt/MTY4ODkxOS5qcGc_/cj0xNTQ3NTAxMjgx/MDc2"
      title="A Netflix Original"
      name="You"
      link="https://www.netflix.com/in/title/80211991"
    />
    <Card
      imgsrc="https://imgs.search.brave.com/jHj0ApkFIi0EG_0M9MCwA6TmA_ReIG71hGOHGfeaYjA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXVyb3Bvc3RlcnMu/ZXUvaW1hZ2UvMzUw/L3Bvc3RlcnMvdGhl/LXdpdGNoZXItc2Vh/c29uLTMtaTE3NzQ1/Ni5qcGc"
      title="A Netflix Original"
      name="The Witcher"
      link="https://www.netflix.com/in/title/80189685"
    />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
