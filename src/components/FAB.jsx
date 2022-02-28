import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./FAB.module.scss";

const FloatingActionButton = () => {
  return (
    <div className={classes.fab}>
      <div className="container flex__right">
        <span className={`${classes.wrapper} flex__center`}>
          <FontAwesomeIcon icon="plus-circle" size="3x" className="text__pink" />
        </span>
      </div>
    </div>
  )
};

export default FloatingActionButton;