import { signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase.config";

const styles = {
  container: "relative h-screen w-screen",
  wrapper:
    "absolute inset-0 bg-darkOverlay flex items-center justify-center p-4",
  // The backdrop blur property blurs out the things which exists behind our current
  // container
  cta: "w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col justify-center items-center",
  ctaInfo:
    "gap-2 px-4 py-2 rounded-md  flex items-center justify-center bg-cardOverlay transition-all ease-in-out duration-200 hover:bg-card cursor-pointer",
  icon: "text-xl",
};

export default function Login() {
  // Using the navigate hook by react router to navigate the user after
  // they have logged in
  const navigate = useNavigate();

  const logInWithGoogle = async () => {
    // Providing a pop up for sign up with google.
    await signInWithPopup(auth, provider).then(() => {
      // Setting the local storage auth variable to true as well
      // for future purposes so we can see if the user has already
      // logged in or not when they come back after a long time.
      localStorage.setItem("auth", "true");

      // When the user is logged in we navigaye to home page
      navigate("/");
    });
  };

  useEffect(() => {
    // If the user is already logged then this is set to true
    // hence in those cases i dont let the user access this route.
    // And i send them back to the home page if they try to access
    // this route.
    if (localStorage.getItem("auth") === "true") {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cta}>
          <div className={styles.ctaInfo} onClick={logInWithGoogle}>
            <FcGoogle className={styles.icon} />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
}
