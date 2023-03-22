import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

const COOKIE_KEY = "cookie-permission";

const options = {
  accepted: "accepted",
  rejected: "rejected",
};

function CookieConcent() {
  const [visible, setVisible] = useState("show");

  useEffect(() => {
    if (localStorage.getItem(COOKIE_KEY) == null) {
      setVisible("show");
    }
    if (localStorage.getItem(COOKIE_KEY) == options.rejected) {
      setVisible("show");
    }
    if (localStorage.getItem(COOKIE_KEY) == options.accepted) {
      setVisible("hidden");
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      debug
      enableDeclineButton
      flipButtons
      visible={visible}
      onAccept={() => {
        localStorage.setItem(COOKIE_KEY, options.accepted);
        setVisible("hidden");
      }}
      onDecline={() => {
        localStorage.setItem(COOKIE_KEY, options.rejected);
        setVisible("hidden");
      }}
    >
      This website uses cookies to improve the experience. Essential cookies
      will be stored in order to run the website.
      <span
        style={{
          fontSize: "10px",
        }}
      >
        You can accept or decline to store optional cookies.
      </span>
    </CookieConsent>
  );
}

export default CookieConcent;
