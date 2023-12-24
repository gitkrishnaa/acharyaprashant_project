import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

function Video_series() {
  const [details, setDetails] = useState(undefined);

  const link =
    "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3";

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((json) => {
        setDetails(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className={styles.contents_video_title}>
        <span>
          <FaArrowLeft />
        </span>
        {details != undefined ? details?.details?.title : "ok"}
      </div>
      {/* <br /> */}
      <div className={`${styles.contents_wrapper}`}>
        <div className={`${styles.contents_video_thumbnail}`}>
          <img
            width="100%"
            height="100%"
            src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg"
            alt=""
          />
        </div>
        <div key={"h"} className={`${styles.contents_details}`}>
          {details != undefined ? details?.details?.description : "ok"}
        </div>
      </div>
    </div>
  );
}

export default Video_series;
