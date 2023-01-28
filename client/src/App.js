import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";

// Importing Routes component to be able to create different routes.
// within our application.

// Importing Route component through which we are going to define
// our route and the component which is going to render on that
// route
import { Routes, Route, useNavigate } from "react-router-dom";

// All the components are going to be imported from the index.js
// file in the components so they will be wrapped in curly braces
// here instead of being imported from there specific file.
import { Home, Login } from "./components";

import { auth } from "./config/firebase.config";

// Adding Framer Motion Animations
import { AnimatePresence } from "framer-motion";
import { validateUser } from "./api";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "./redux/userSlice";

function App() {
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // It is an event listner that listens for changes in the authentcation
    // For Example if the user has logged in or Logged out and whenever
    // such an event happens this event listner triggers a callback function.

    // Now on authStateChanged actually grabs the user stored in thec cookies
    // and runs the callback function with it however if there is no user loged
    // in that case its runs the callback function with no input.

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // When the user does exist though we wanna get the user token
        // send to our backend a validate it
        user.getIdToken().then((token) => {
          validateUser(token).then((user) => dispatch(setUser(user)));
        });
      } else {
        // So basically if we have no user then we are going to set
        // auth variable in our local storage as false

        // This is going to get triggered when the user logs out
        // so in that case we wanna set the auth to false.

        dispatch(removeUser());

        localStorage.setItem("auth", "false");

        // And we navigate the user to the login route.
        naviagte("/login", { replace: true });
      }
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // This will add page loaf animations to our components
    // as they load up on our screen

    // Animate Presence will only render the next component
    // only after the first components animation has finsihed
    // executing since mode is set to wait.
    <AnimatePresence mode="wait">
      <div className="bg-primary h-auto flex items-center justify-center">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* If the user tries to access any other routes other than the
        ones defined we direct them to this component */}
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}
export default App;
