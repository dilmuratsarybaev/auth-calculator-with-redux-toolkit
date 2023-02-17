import { useDispatch, useSelector } from "react-redux";
import { authorized } from "../store/auth/authSlice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  const logOutHandler = () => {
    dispatch(authorized.logOut());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
