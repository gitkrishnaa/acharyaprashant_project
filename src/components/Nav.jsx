import React, { useState } from "react";
import styles from "./style.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [side_nav, setSide_nav] = useState(false);
  const side_nav_opener = () => {
    setSide_nav(!side_nav);
  };

  return (
    <div
      // style={{ backgroundColor: "#D24115", height: "50px", fontWeight: "550" }}
      className={` ${styles.main_wrapper} `}
    >
      <div className={`${styles.nav_items_wrapper} `}>
        <div>
          <img
            width={"35px"}
            height={"35px"}
            style={{ borderRadius: "50%" }}
            src="https://cimg.acharyaprashant.org/images/img-dd3f36d4-e28c-45fe-85ce-f3162b3f6f3d/20/image.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.nav_items}`}>
          <div className="m-2 ">Home</div>
          <div className="m-2 ">Live Sessions</div>
          <div className="m-2 ">Video Series</div>
          <div className="m-2 ">AP Books</div>
          <div className="m-2 ">AP Articles</div>
          <div className="m-2 ">Invite</div>
          <div className="m-2 ">In Media</div>
          <div className="m-2 ">Careers</div>
          <div className="m-2 ">Donate</div>
        </div>
      </div>
      <div className=" d-flex">
        <div></div>
        <div onClick={side_nav_opener}>
          <GiHamburgerMenu color="white" fontSize={"30px"} />
        </div>
      </div>
      {/* side nav */}

      {side_nav == true ? (
        <div className={`${styles.side_nav_wrapper}`}>
          <div
            onClick={side_nav_opener}
            className={`${styles.side_nav_closer}`}
          >
            <div>X</div>
            
          </div>
          <div
            onClick={side_nav_opener}
            className={`${styles.side_nav_wrapper_backdrop}`}
          ></div>
          <div className={`${styles.side_nav_items}`}>
            <div className="m-2 ">Home</div>
            <div className="m-2 ">Live Sessions</div>
            <div className="m-2 ">Video Series</div>
            <div className="m-2 ">AP Books</div>
            <div className="m-2 ">AP Articles</div>
            <div className="m-2 ">Invite</div>
            <div className="m-2 ">In Media</div>
            <div className="m-2 ">Careers</div>
            <div className="m-2 ">Donate</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nav;
