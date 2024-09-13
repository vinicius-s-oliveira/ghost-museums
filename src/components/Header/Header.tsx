import Button from "../Button/Button";
import NavItem from "../NavItem/NavItem";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapperCenter}>
        <div className={styles.searchWrapper}>
          <a className={styles.logoWrapper} href="/">
            {/* @TO-DO: Componentize Museum Icon */}
            <span className="material-symbols-outlined text-4xl text-neutral-900">
              museum
            </span>
          </a>
          <SearchInput placeholder="Pesquisar exposições" />
        </div>

        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <NavItem title="Como funciona" />
            <NavItem title="Eventos" />
            <div className={styles.loginWrapper}>
              <Button title="Entre ou cadastre-se" onClick={() => {}} />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
