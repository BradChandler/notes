import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Header.module.scss";

const Header = (props) => {

  return (
    <header className="bg__navy padding__xxs">
      <section className="container flex__between">
        <h1 className="text__lg text__white pos__rel">
          Notes
          <FontAwesomeIcon icon="pen-fancy" size="xs" className={classes.pen} />
        </h1>
        <FontAwesomeIcon icon="search" size="2x" className="text__pink pointer" />
      </section>
    </header>
  )
}

export default Header;