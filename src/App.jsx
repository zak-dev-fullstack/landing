import React, { useState, useEffect } from "react";
import "./App.css";


function App() {

  return (
    <>
      <div>
        <Navbar />
        <Slideshow />
        <BandSection />
        <TourSection />
        <TicketModal />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

function Navbar() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="w3-top">
      <div className="w3-bar w3-black w3-card">
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
          href="#"
          onClick={toggleNav}
          title="Toggle Navigation Menu"
        >
          <i className="fa fa-bars"></i>
        </a>
        <img
          src="https://res.cloudinary.com/dewyjsioa/image/upload/v1696340886/xxnote6toa8sfvu0n7fc.png"
          style={{ width: "80px", height: "80px"}}
          alt="logo"
        />
        <a href="/landing" className="w3-bar-item w3-button w3-padding-large">
          HOME
        </a>
        <a href="#band" className="w3-bar-item w3-button w3-padding-large w3-hide-small">
          DEMO BAND
        </a>
        <a href="#tour" className="w3-bar-item w3-button w3-padding-large w3-hide-small">
          FECHAS
        </a>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">
          CONTACT
        </a>
        <div className="w3-dropdown-hover w3-hide-small">
          <button className="w3-padding-large w3-button" title="More">
            ON-LINE SHOP <i className="fa fa-caret-down"></i>
          </button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            <a href="#" className="w3-bar-item w3-button">
              Merchandise
            </a>
            <a href="#" className="w3-bar-item w3-button">
              Extras
            </a>
            <a href="#" className="w3-bar-item w3-button">
              Media
            </a>
          </div>
        </div>
        <a href="#" className="w3-padding-large w3-hover-red w3-hide-small w3-right">
          <i className="fa fa-search"></i>
        </a>
      </div>
      {navVisible && (
        <div
          id="navDemo"
          className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
          style={{ marginTop: "46px" }}
        >
          <a href="#band" className="w3-bar-item w3-button w3-padding-large" onClick={toggleNav}>
            DEMO BAND
          </a>
          <a href="#tour" className="w3-bar-item w3-button w3-padding-large" onClick={toggleNav}>
            FECHAS
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large" onClick={toggleNav}>
            CONTACT
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large" onClick={toggleNav}>
            MERCH
          </a>
        </div>
      )}
    </div>
  );
}
function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      src: "https://res.cloudinary.com/dewyjsioa/image/upload/v1721326448/sitr2fblajgxhifu6azl.jpg",
      captionTitle: "EUROPE",
      captionText: "Street",
    },
    {
      src: "https://res.cloudinary.com/dewyjsioa/image/upload/v1721326448/aypm6jn29cmkoyrvcrrv.jpg",
      captionTitle: "U.S.A",
      captionText: "Studio",
    },
    {
      src: "https://res.cloudinary.com/dewyjsioa/image/upload/v1721326448/bm3wktqfh69hfrvivg9d.jpg",
      captionTitle: "TOKIO",
      captionText: "Concert",
    },
  ];

  return (
    <div className="w3-content" style={{ maxWidth: "2000px", marginTop: "46px" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="mySlides w3-display-container w3-center"
          style={{ display: currentSlide === index ? "block" : "none" }}
        >
          <img src={slide.src} style={{ width: "100%" }} alt="Slideshow" />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>{slide.captionTitle}</h3>
            <p><b>{slide.captionText}</b></p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BandSection() {
  return (
    <div className="w3-container w3-content w3-center w3-padding-64" style={{ maxWidth: "800px" }} id="band">
      <h2 className="w3-wide">DEMO BAND</h2>
      <p className="w3-opacity"><i>MUSIC STYLE</i></p>
      <p className="w3-justify">
        Album "SENSACIONES" 📀
      </p>
      <div className="w3-row w3-padding-32">
        <div className="w3-third">
          <p>...? </p>
          <img
            src="https://res.cloudinary.com/dewyjsioa/image/upload/v1708466386/wave1_zlhijc.png"
            className="w3-round w3-margin-bottom"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
        <div className="w3-third">
          <p>...?</p>
          <img
            src="https://res.cloudinary.com/dewyjsioa/image/upload/v1708466386/wave1_zlhijc.png"
            className="w3-round"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
}
function TourSection() {
  return (
    <div className="w3-black" id="tour">
      <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: "800px" }}>
        <h2 className="w3-wide w3-center">FECHAS</h2>
        <p className="w3-opacity w3-center"><i>Tickets</i></p>
        <br />
        <ul className="w3-ul w3-border w3-white w3-text-grey">
          <li className="w3-padding">
            Octubre <span className="w3-tag w3-red w3-margin-left">Sold out</span>
          </li>
          <li className="w3-padding">
            Noviembre <span className="w3-tag w3-red w3-margin-left">Sold out</span>
          </li>
          <li className="w3-padding">
            Diciembre <span className="w3-badge w3-right w3-margin-right">3</span>
          </li>
        </ul>
        <div className="w3-row-padding w3-padding-32" style={{ margin: "0 -16px" }}>
          <TourCard
            imgSrc="https://res.cloudinary.com/dewyjsioa/image/upload/v1708466386/wave1_zlhijc.png"
            location="AMSTERDAM"
            date="30 Sep 2022"
            description="buena musica🔥🔥"
          />
          <TourCard
            imgSrc="https://res.cloudinary.com/dewyjsioa/image/upload/v1708466386/wave1_zlhijc.png"
            location="CHILE"
            date="?? Oct 2022"
            description="......."
          />
          <TourCard
            imgSrc="https://res.cloudinary.com/dewyjsioa/image/upload/v1708466386/wave1_zlhijc.png"
            location="MIAMI"
            date="?? Oct 2022"
            description="......."
          />
        </div>
      </div>
    </div>
  );
}

function TourCard({ imgSrc, location, date, description }) {
  return (
    <div className="w3-third w3-margin-bottom">
      <img src={imgSrc} alt="Tour" style={{ width: "100%" }} className="w3-hover-opacity" />
      <div className="w3-container w3-white">
        <p><b>{location}</b></p>
        <p className="w3-opacity">{date}</p>
        <p>{description}</p>
        <button className="w3-button w3-black w3-margin-bottom" onClick={() => document.getElementById("ticketModal").style.display = "block"}>
          Buy Tickets
        </button>
      </div>
    </div>
  );
}

function TicketModal() {
  return (
    <div id="ticketModal" className="w3-modal">
      <div className="w3-modal-content w3-animate-top w3-card-4">
        <header className="w3-container w3-teal w3-center w3-padding-32">
          <span
            onClick={() => (document.getElementById("ticketModal").style.display = "none")}
            className="w3-button w3-teal w3-xlarge w3-display-topright"
          >
            ×
          </span>
          <h2 className="w3-wide"><i className="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
        </header>
        <div className="w3-container">
          <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
          <input className="w3-input w3-border" type="text" placeholder="How many?" />
          <p><label><i className="fa fa-user"></i> Send To</label></p>
          <input className="w3-input w3-border" type="text" placeholder="Enter email" />
          <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i className="fa fa-check"></i></button>
          <button
            className="w3-button w3-red w3-section"
            onClick={() => (document.getElementById("ticketModal").style.display = "none")}
          >
            Close <i className="fa fa-remove"></i>
          </button>
          <p className="w3-right">
            Need <a href="#" className="w3-text-blue">help?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: "800px" }} id="contact">
      <h2 className="w3-wide w3-center">CONTACT</h2>
      <p className="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
      <div className="w3-row w3-padding-32">
        <div className="w3-col m6 w3-large w3-margin-bottom">
          <i className="fa fa-map-marker" style={{ width: "30px" }}></i> PERU<br />
          <i className="fa fa-phone" style={{ width: "30px" }}></i> Phone: +00 151515<br />
          <i className="fa fa-envelope" style={{ width: "30px" }}> </i> Email: mail@mail.com<br />
        </div>
        <div className="w3-col m6">
          <form action="" target="_blank">
            <div className="w3-row-padding" style={{ margin: "0 -16px 8px -16px" }}>
              <div className="w3-half">
                <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
              </div>
              <div className="w3-half">
                <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
              </div>
            </div>
            <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
            <button className="w3-button w3-black w3-section w3-right" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w3-container w3-center w3-opacity w3-light-grey w3-xlarge">
      <i className="fa fa-facebook-official w3-hover-opacity"></i>
      <i className="fa fa-instagram w3-hover-opacity"></i>
      <i className="fa fa-snapchat w3-hover-opacity"></i>
      <i className="fa fa-pinterest-p w3-hover-opacity"></i>
      <i className="fa fa-twitter w3-hover-opacity"></i>
      <i className="fa fa-linkedin w3-hover-opacity"></i>
      <p className="w3-medium">
        Powered by{""}
        <a href="" target="_blank" className="w3-hover-text-green">
          Wave Labs
        </a>
      </p>
    </footer>
  );
}


export default App
