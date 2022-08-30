import { Link } from "react-router-dom";
import "./herosection.css";
import { motion } from "framer-motion";
const HeroSection = () => {
  const imageData = [
    {
      image:
        "https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2016/Graduation-photo-tips/Media/Graduation-photos-2-girlfriends.jpg",
      p: "Graduation",
    },
    {
      image:
        "https://media.istockphoto.com/photos/bride-and-groom-enjoying-in-their-love-picture-id868924246?b=1&k=20&m=868924246&s=170667a&w=0&h=iVeEWxB5_jQ6FsPA0fQeAVpOpOSpRdDiJ3fN8VYq-Ns=",
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
          With us, customization is 100% guaranteed from the very beginning, we
          will create a custom event tailored to your specific want and needs
        </p>
        <motion.div
          initial={{ translateX: "-100vw" }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/signup">Chat with us</Link>
        </motion.div>
      </div>
      <div className="right__container">
        {imageData.map((image, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="image__container"
          >
            <img src={image.image} alt="" />
            <p>{image.p}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
