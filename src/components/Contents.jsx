import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

function Contents() {
  const [details, setDetails] = useState({ courses: [] });

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
      <h5 className={styles.Contents_list_wrapper_main}>
        वीडियो श्रृंखलाएँ {`(8)`}
      </h5>
      <div className={styles.Contents_list_wrapper}>
        {/* <hr /> */}
        {details.courses.map((d,n) => {
          return (
            <div className={styles.contents_list}>
                
                <div className={styles.parts}> भाग {n+1} </div>
              <div className={styles.title}>{d.title}</div>
              <div className={styles.subtitle}>{d.subtitle}</div>
              <div className={styles.courseHours}>{d.courseHours}</div>
              <div className={styles.amount}>
                <span>सहयोग राशि:</span> <span> {d.amount}</span>{" "}
                <span className={styles.originalAmount}>
                  {" "}
                  {"  "}
                  {d.originalAmount}
                </span>
              </div>
              <div className={styles.language}>{d.language}</div>

              <div>
                <a href="#">Add to cart</a> | <a href="#">Enroll</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contents;
