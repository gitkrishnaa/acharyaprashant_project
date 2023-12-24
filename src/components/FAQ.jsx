import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function FAQ() {
  const Render_data = ({ header_name, contents }) => {
    const [open, setOpen] = useState(true);
    const open_handler = () => {
      setOpen(!open);
    };

    return (
      <div className={`${styles.faq_items}`}>
        <div onClick={open_handler} className={`${styles.faq_items_header}`}>
          <div>{header_name}</div>
          <div>{open ? <IoIosArrowDown/> : <IoIosArrowUp/>}</div>
        </div>
        <div>{open ? "" : contents}</div>
      </div>
    );
  };

  const [details, setDetails] = useState([]);
  const link =
    "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english";
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
    <div className={`${styles.faq_items_wrapper}`}>
      <div>अक्सर पूछे जाने वाले प्रश्न</div>
      <div>
        आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है? कृपया हमारी सपोर्ट
        टीम से संपर्क करें।
      </div>
      <br />

      {details.map((d) => {
        return <Render_data header_name={d.question} contents={d.answer} />;
      })}
    </div>
  );
}

export default FAQ;
