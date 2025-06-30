import { NavLink } from "react-router-dom";
import "./landingpage.css";
import { AiFillSmile } from "react-icons/ai";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <img
        src="https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg"
        alt="pizza"
        className="landingpage-img"
      />
      <div className="landingpage-btn">
        <div className="d-flex flex-column gap-5">
          <div className="typewriter">
            <h1>WELCOME TO MY WOLRD!</h1>
          </div>
          <NavLink className="btn btn-dark" to="/product">
            Let's Start Guys!{" "}
            <span>
              <AiFillSmile fontSize={"2rem"} />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
