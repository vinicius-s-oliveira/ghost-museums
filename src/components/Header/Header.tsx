import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapperCenter}>
        <a href="/">
          <img
            className={styles.logo}
            src="./src/assets/museum-icon.png"
            alt="logo-icon"
          ></img>
        </a>

        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#">Localidades</a>
            </li>

            <li className={styles.navItem}>
              <a href="#">Seja um Parceiro</a>
            </li>

            <li className={styles.navItem}>
              <button className={styles.button} type="button">
                Entrar
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
