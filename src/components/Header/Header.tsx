import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapperCenter}>
        <div className={styles.searchWrapper}>
          <a href="/">
            <img
              className={styles.logo}
              src="./src/assets/museum-icon.png"
              alt="logo-icon"
            />
          </a>

          <div className={styles.search}>
            <input placeholder="Pesquisar exposições" />
            <img src="./src/assets/search.svg" />
          </div>
        </div>

        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#">Como funciona</a>
            </li>

            <li className={styles.navItem}>
              <a href="#">Eventos</a>
            </li>

            <li className={styles.loginButton}>
              <a href="#">
                <span>Entre ou Cadastre-se</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
