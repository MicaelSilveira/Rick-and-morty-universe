import React from "react";
import logo from "../../../Assets/star-universe.png";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import GlobalContext from "../../../GlobalContext";
const Header = () => {
  const { mobileState, setMobileActive } = React.useContext(GlobalContext);
  const [menuMobile, setMenuMobile] = React.useState<boolean>(false);
  const menuDiv = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function MatchMedia() {
      const { matches } = window.matchMedia("(max-width: 800px)");
      setMobileActive(matches);
      if (matches === false) {
        setMenuMobile(false);
      }
    }
    MatchMedia();
    window.addEventListener("resize", MatchMedia);
  }, []);

  function handleClick() {
    menuDiv.current?.previousElementSibling?.classList.toggle("buttonActive");
    setMenuMobile((state) => !state);
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} width={80} height={80} priority />
          </a>
        </Link>
      </div>
      <div className={styles.title_container}>
        <div className={styles.title}>
          <Link href="/">
            <a>
              <h2>Rick And Morty Universe</h2>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.menu_container}>
        {mobileState && (
          <div className={styles.buttonMobile} onTouchStart={handleClick}>
            <button className={styles.button}></button>
          </div>
        )}
        <div
          className={
            menuMobile ? `${styles.menuMobile} animeDown` : styles.menudiv
          }
          ref={menuDiv}
        >
          <ul className={styles.menuUL}>
            <li>
              <Link href="/caracters/List-char">
                <a> Caracters</a>
              </Link>
            </li>
            <li>
              <Link href="/locations/List-locations">
                <a> Locations</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> Episodes</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
