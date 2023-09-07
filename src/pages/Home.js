import illus from "../images/illus.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div>
          <img src={illus} alt="okay" />
        </div>
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            debitis corporis, sed cupiditate reprehenderit quasi doloribus eius
            natus rerum itaque neque eum amet delectus. Asperiores nam nemo
            tempore consequatur rem deleniti a laboriosam, corrupti
            perspiciatis.
          </p>
          <p className="click">
            Click here to <Link to="/Login">login</Link> or{" "}
            <Link to="/Signup">signup</Link>
          </p>
        </div>
      </div>
    </>
  );
}
