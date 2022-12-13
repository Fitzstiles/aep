import "./about.css";
const About = () => {
  return (
    <div className="about__container">
      <h1>About us</h1>
      <div className="aboutDetails__container">
        <div className="leftAbout__container">
          <img
            src="https://about-events.com/wp-content/uploads/2020/08/slider-events.jpg"
            alt=""
          />
        </div>
        <div className="rightAbout__container">
          <p>
            Austin's Events Palace is a full-service event planning company
            providing a wide array of event services from venue styling to
            vendor management, event staffing, and more.
          </p>
          <p>
            The AEP experience is unlike any other. Our full-service event
            planning and design team will guide you every step of the way,
            ensuring a stress-free experience from start to finish. When it’s
            showtime, our staff will work tirelessly to guarantee your event is
            effortless and unforgettable.
          </p>
          <h2>Our Mission</h2>
          <p>
            We help you plan your events while providing visibility to small
            businesses, and developing their activity: DJs, restaurants, pastry
            chefs, decorators or even people who just want to rent out their
            place for the occasion!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
