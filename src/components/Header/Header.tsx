import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapperCenter}>
          <a href="/">
            <img
              className={styles.logo}
              src="./src/assets/museum-icon.png"
              alt="logo-icon"
            ></img>
          </a>

          <nav>
            <ul>
              <li>
                <a
                  className="bg-neutral-300 decoration-charts-carrot-300"
                  href="#"
                >
                  Localidades
                </a>
              </li>

              <li>
                <a href="#">Seja um Parceiro</a>
              </li>

              <li>
                <a href="#">Entrar</a>
              </li>
            </ul>

            {/* @TO-DO: Login Icon */}
            {/* <a href="/">
              <img src="" alt="login-icon"></img>
            </a> */}
          </nav>
        </div>
      </header>
    </>
  );
}
