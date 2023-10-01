const Sdata = [
  {
    id: 1,
    name: "DARK",
    title: "A Netflix Original",
    image:
      "https://imgs.search.brave.com/D8qLA6IQJz-nTGBkEaxIhdkXtcylR-zaS6KZD16KKjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGlzcGxhdGUu/Y29tLzg1N3gxMjAw/L2Rpc3BsYXRlLzIw/MTgtMDItMjIvY2Ew/Y2UwZTAxOTc0OTEw/ZDJiYjk4NTI2ZmE4/Y2Y1NmZfYjU3ZTYw/NzlkMzMyODViNDZk/ZGQzYjExZjcyZGQx/NzUuanBn",
    link: "https://www.netflix.com/in/title/80100172",
  },
  {
    id: 2,
    name: "Squid Games",
    title: "A netflix Original",
    image:
      "https://imgs.search.brave.com/JSAls_YMk80I6AtlY02CcFG4BRQJ2t614oF7Wo9MJOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXVyb3Bvc3RlcnMu/ZXUvaW1hZ2UvMzUw/L3Bvc3RlcnMvc3F1/aWQtZ2FtZS1jcm93/ZC1pMTIwMDEyLmpw/Zw",
    link: "https://www.netflix.com/in/title/81040344",
  },
  {
    id: 3,
    name: "Sacred Games",
    title: "A netflix Original",
    image:
      "https://imgs.search.brave.com/nHGxZDk18a13FG2GEcXIBlIZX5aN2QjSJb9KpLeJjOg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZXNp/emluZy5mbGl4c3Rl/ci5jb20vODVNOGdJ/R01FN2xBQ3hEc3JJ/Q1ZMSmRFTkN3PS8y/MDZ4MzA1L3YyL2h0/dHBzOi8vcmVzaXpp/bmcuZmxpeHN0ZXIu/Y29tL0N2MnNCZmRV/S2RFSFkyb1R0a21H/WE92STdpbz0vZW1z/LmNISmtMV1Z0Y3kx/aGMzTmxkSE12ZEha/elpYSnBaWE12VWxS/VVZqTXhOVGMxTmk1/M1pXSnc",
    link: "https://www.netflix.com/in/title/80115328",
  },
  {
    id: 4,
    name: "You",
    title: "A Netflix Original",
    image:
      "https://imgs.search.brave.com/Sz6EL-KSQGnyvXAKfIBMS0AhU9AhbD_1_oQoejXG5TM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aW1hZ2VzLmV4cHJl/c3MuY28udWsvaW1n/L2R5bmFtaWMvMjAv/NTkweC9zZWNvbmRh/cnkveW91LW5ldGZs/aXgtc2Vhc29uLTIt/MTY4ODkxOS5qcGc_/cj0xNTQ3NTAxMjgx/MDc2",
    link: "https://www.netflix.com/in/title/80211991",
  },
  {
    id: 5,
    name: "The Witcher",
    title: "A Netflix Original",
    image:
      "https://imgs.search.brave.com/jHj0ApkFIi0EG_0M9MCwA6TmA_ReIG71hGOHGfeaYjA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXVyb3Bvc3RlcnMu/ZXUvaW1hZ2UvMzUw/L3Bvc3RlcnMvdGhl/LXdpdGNoZXItc2Vh/c29uLTMtaTE3NzQ1/Ni5qcGc",
    link: "https://www.netflix.com/in/title/80189685",
  },
  {
    id: 6,
    name: "Tom Clancy's Jack Ryan",
    title: "An Amazon Prime Original",
    image:
      "https://imgs.search.brave.com/IJVxpnD2hwS7oBudPSPcy1HkvpbLc0q_K4Jpsr_cr8s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tb3Zp/ZXBvc3RlcnMyLmNv/bS9pbWFnZXMvMTYz/ODQ3Ny1iLmpwZw",
    link: "https://imgs.search.brave.com/IJVxpnD2hwS7oBudPSPcy1HkvpbLc0q_K4Jpsr_cr8s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tb3Zp/ZXBvc3RlcnMyLmNv/bS9pbWFnZXMvMTYz/ODQ3Ny1iLmpwZw",
  },
  {
    id: 7,
    name: "Citadel",
    title: "An Amazon Prime Original",
    image:
      "https://imgs.search.brave.com/RNEQj7lplKJPUIHG6RmuZVXmnwwkafbtn-el3xf4YSM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZmFzdGx5LnBhcnJv/dGFuYWx5dGljcy5j/b20vaW1hZ2VzL3Bv/c3Rlci1oeXBoZW4v/NDljMWNhZTktODE0/My00MTdiLTk2MWQt/OTQwYzE0YTdjZGNj/LmpwZw",
    link: "https://imgs.search.brave.com/RNEQj7lplKJPUIHG6RmuZVXmnwwkafbtn-el3xf4YSM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZmFzdGx5LnBhcnJv/dGFuYWx5dGljcy5j/b20vaW1hZ2VzL3Bv/c3Rlci1oeXBoZW4v/NDljMWNhZTktODE0/My00MTdiLTk2MWQt/OTQwYzE0YTdjZGNj/LmpwZw",
  },
];

export default Sdata;
