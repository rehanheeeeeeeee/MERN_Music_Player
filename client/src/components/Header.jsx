import React from "react";

// Importing the images from the images folder.
import { Logo } from "../assets/images/index";

import { NavLink } from "react-router-dom";

// Importing the global tailwind styles.
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

import { FaCrown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const styles = {
  container: "flex items-center w-full p-4 md:py-2 md:px-6",
  options: "flex items-center justify-center ml-7",
  option: "capitalize mx-5 md:text-lg text-sm",
  logo: "w-10 md:w-16 object-contain",
  userContainer:
    "flex items-center ml-auto cursor-pointer md:gap-2 gap-1 relative",
  userPfp: "w-12 min-w-[44px] object-cover rounded-full shadow-lg",
  userInfo: "flex flex-col",
  username:
    "text-textColor text-sm md:text-lg hover:text-headingColor md:font-medium",
  member:
    "flex items-center gap-2 text-[10px] md:text-sm whitespace-nowrap text-gray-500",
  premiumIcon: "hidden md:inline text-yellow-500",
  dropDown:
    "absolute top-12 right-28 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col px-8 py-4 gap-4",
  dropdownOption:
    "text-base text-textColor whitespace-nowrap hover:font-semibold duration-100 transtion-all ease-in-out",
};

const options = [
  {
    link: "home",
  },
  {
    link: "musics",
  },
  {
    link: "premium",
  },
  {
    link: "contact",
  },
];

const Option = ({ link }) => (
  <li className={styles.option}>
    {/* This component is very useful since it gives you which link is active 
      hence you can leverage on that and therefore change className of the link
if its active therefore change styles as well.*/}
    <NavLink
      to={`/${link}`}
      className={({ isActive }) =>
        isActive ? isActiveStyles : isNotActiveStyles
      }
    >
      {link}
    </NavLink>
  </li>
);

export default function Header() {
  const user = useSelector(selectUser);
  return (
    <header className={styles.container}>
      <NavLink to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </NavLink>
      <ul className={styles.options}>
        {options.map(({ link }, index) => (
          <Option key={index} link={link} />
        ))}
      </ul>
      <div className={styles.userContainer}>
        <img
          src={user?.imageURL}
          className={styles.userPfp}
          alt=""
          referrerPolicy="no-referrel"
        />
        <div className={styles.userInfo}>
          <p className={styles.username}>{user?.name}</p>
          <p className={styles.member}>
            Premium Member. <FaCrown className={styles.premiumIcon} />{" "}
          </p>
        </div>
        <div className={styles.dropDown}>
          <p className={styles.dropdownOption}>Profile</p>
          <p className={styles.dropdownOption}>My Favorites</p>
          <p className={styles.dropdownOption}>Sign Out</p>
        </div>
      </div>
    </header>
  );
}
