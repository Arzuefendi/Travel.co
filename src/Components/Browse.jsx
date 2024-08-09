import React from "react";

const Browse = () => {
  return (
    <div>
      <footer className="m-5" id="3">
        <div className="box-1 m-5">
          <h1>Browse Tours By Activity</h1> <br />
          <p>Outdoor Activites</p>
          <p>Cultural & Thematic Tours</p>
          <p>Family Friendly Tours</p>
          <p>Holiday & Seasonal Tours</p>
        </div>
        <div className="box-2 m-5">
          <br />
          <br />
          <br />
          <p>City Tours</p>
          <p>Indulgence & Luxury Tours</p>
          <p>Relaxation Tours</p>
          <p>Wild & Adventure Tours</p>
        </div>
        <div className="box-3 m-5">
          <h1>Newsletter</h1> <br />
          <p>Subscribe for updates & promotions</p> <br />
          <div className="box-4">
            <input type="email" placeholder="Enter a valid e-mail adress" />
            <button type="submit" id="button">
              Submit
            </button>{" "}
            <br /> <br />
          </div>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-google"></i>
        </div>
      </footer>
    </div>
  );
};

export default Browse;
