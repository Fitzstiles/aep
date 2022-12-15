import "./discount.css";
const Discount = () => {
  return (
    <div className="discount__container">
      <div className="discounts">
        <div style={{ backgroundColor: "#FFF5E3" }} className="discount">
          <div className="discount__header">
            <h1>A</h1>
            <span style={{ backgroundColor: "#FBE7C4" }}>20%</span>
          </div>
          <h3>Wedding</h3>
          <p>Get 20% off on your total wedding price.</p>
        </div>
        <div style={{ backgroundColor: "#FFEBF6" }} className="discount">
          <div className="discount__header">
            <h1>A</h1>
            <span style={{ backgroundColor: "#FED7ED" }}>20%</span>
          </div>
          <h3>Birthday</h3>
          <p>Get 20% off on your total birthday price.</p>
        </div>
        <div style={{ backgroundColor: "#E4FFFA" }} className="discount">
          <div className="discount__header">
            <h1>A</h1>
            <span style={{ backgroundColor: "#C4F6ED" }}>20%</span>
          </div>
          <h3>Graduation</h3>
          <p>Get 20% off on your total graduation price.</p>
        </div>
        <div style={{ backgroundColor: "#FFE6E4" }} className="discount">
          <div className="discount__header">
            <h1>A</h1>
            <span style={{ backgroundColor: "#FDD9D6" }}>20%</span>
          </div>
          <h3>Bridal Shower</h3>
          <p>Get 20% off on your total bridal shower price.</p>
        </div>
      </div>
      <div className="img__container">
        <img src="./images/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Discount;
