import React, { useEffect } from "react";
// import styles from "scss/components/Toast.module.scss";
// import { IoClose } from "react-icons/io5";
import useMediaQuery from "hooks/useMediaQuery";

function Toast({ title, state, stateSetter, toastRef }) {
  const isBellow760px = useMediaQuery("(max-width : 47.5em)");

  useEffect(() => {
    if (state) {
      stateSetter(true);

      setTimeout(() => {
        stateSetter(false);
      }, 3000);
    } else {
      stateSetter(false);
    }

    return () => stateSetter(false);
  }, [state]);

  return (
    <div
      className={`${styles.toast} ${state ? styles.active : ""}`}
      ref={toastRef}
    >
      <p className={`${isBellow760px ? "fs-14px" : "fs-22px"}  white weight-4`}>
        {title}
      </p>

      {/* <button onClick={() => stateSetter(false)}>
        <IoClose color="white" />
      </button> */}
    </div>
   
  );
}

export default Toast;
