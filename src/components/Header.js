import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  toggleGptSearchView,
  addGPTMovieResults,
  clearGptSearchView,
} from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        dispatch(clearGptSearchView());
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  // Signout API
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    // toggle search component
    dispatch(toggleGptSearchView());
    dispatch(addGPTMovieResults({ movieNames: null, movieResults: null }));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen md:px-8 px-2 py-2 bg-gradient-to-b from-black z-10 flex md:flex-row justify-between">
      <img className="md:w-44 w-20 md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="p-4 flex gap-2">
          {showGptSearch && (
            <select
              className="p-2 mx-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <span>
            <button
              className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-md"
              onClick={handleGPTSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
          </span>
          <span className="flex md:gap-2 flex-col items-center md:flex-row">
            <img
              alt="user-avatar"
              src={user.photoURL}
              className="md:w-10 md:h-10 w-5 h-5 rounded-md hidden md:block"
            />
            <button className="font-bold text-white" onClick={handleSignOut}>
              (Sign Out)
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
