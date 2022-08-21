import { Link } from "react-router-dom";
import "./herosection.css";
const HeroSection = () => {
  const imageData = [
    {
      image:
        "https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2016/Graduation-photo-tips/Media/Graduation-photos-2-girlfriends.jpg",
      p: "Graduation",
    },
    {
      image:
        "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043964.jpg?w=2000",
      p: "Weddings",
    },
    {
      image:
        "https://cdn.greenvelope.com/blog/wp-content/uploads/AdobeStock_133800814-scaled.jpeg",
      p: "Birthdays",
    },
    {
      image:
        "https://media.istockphoto.com/photos/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-picture-id1189205501?k=20&m=1189205501&s=612x612&w=0&h=fexl_Cmu6AdLatIasGg_XYTkLSeWHCtvhMw1nK5_uDc=",
      p: "Concerts",
    },
  ];
  return (
    <div className="herosection__container">
      <div className="left__container">
        <h1>Tell us what you want to celebrate and leave the rest to us</h1>
        <p>
          With us , customization is 100% guaranteed from the very beginning, we
          will create a custom event tailored to your specific want and needs
        </p>
        <Link to="/login">Chat with us</Link>
      </div>
      <div className="right__container">
        {imageData.map((image) => (
          <div className="image__container">
            <img src={image.image} alt="" />
            <p>{image.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
