import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function TermsOfUse() {
  const [state, setState] = React.useState(false);
  const handleClick = () => {
    setState(!state);
  };

  const message = () => {
    alert(
      state ? "Thanks for agreeing, enjoy your stay here" : "NOOOOOOOO !!!!"
    );
  };
  return (
    <div className="terms-of-use">
      <h1>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </h1>
      <div className="checkboxclass">
        <Image
          src="/images/image1.png"
          height={200}
          width={200}
          alt="image1"
          className="checkboximage"
        />
        <div className="agree">
          <input
            className="checkbox"
            type="checkbox"
            onClick={handleClick}
          ></input>
          <button className="checkboxbutton" onClick={message}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
