import styles from "./Footer.module.scss";

// @TO-DO: Componentize elements.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoSection}>
        <div className={styles.info}>
          <div className={styles.infoColumn}>
            <div className={styles.infoTitle}>Company Group</div>
            <div className={styles.linkGroup}>
              <span className={styles.linkButton}>About</span>
              <span className={styles.linkButton}>Structure</span>
              <span className={styles.linkButton}>Recognitions</span>
              <span className={styles.linkButton}>Inovation</span>
              <span className={styles.linkButton}>Work With Us</span>
            </div>
            <div className={styles.linkFooter}>Company Institute</div>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.infoTitle}>Businesses</div>
            <div className={styles.linkGroup}>
              <span className={styles.linkButton}>Highways</span>
              <span className={styles.linkButton}>Airports</span>
              <span className={styles.linkButton}>Urban Mobility</span>
              <span className={styles.linkButton}>Other Businesses</span>
            </div>
            <div className={styles.linkFooter}>Suppliers</div>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.infoTitle}>ESG</div>
            <div className={styles.linkGroup}>
              <span className={styles.linkButton}>Our practices</span>
              <span className={styles.linkButton}>Environmental</span>
              <span className={styles.linkButton}>Social</span>
              <span className={styles.linkButton}>Governance</span>
            </div>
            <div className={styles.linkFooter}>News</div>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.infoTitle}>
              <span className="">
                Work
                <br />
                with Us
              </span>
            </div>
            <div className={styles.linkGroupAlternative}>
              <span className={styles.linkButton}>Contacts</span>
              <span className={styles.linkButton}>Confidencial channel</span>
            </div>
            <div className={styles.linkFooter}>Investors</div>
          </div>
        </div>

        <div className={styles.newsletter}>
          <div className={styles.formHeader}>
            <span className={styles.title}>Company Institute Newsletter</span>
            <span className={styles.subtitle}>
              Inform your WhatsApp or mail to receive newsletter from Company
              Institute.
            </span>
          </div>

          <form className={styles.form}>
            <div className={styles.fields}>
              <label>Mail *</label>
              <input placeholder="Type your mail" />
            </div>

            <div className={styles.fields}>
              <label className="text-sm">WhatsApp</label>
              <input placeholder="Type your WhatsApp" />
            </div>

            <div className={styles.checkbox}>
              {/* @TO-DO: Create checkbox component. */}
              <input type="checkbox" />
              <span>
                I accept to receive content of Company and I agree with{" "}
                <u>Privacy Policy</u>
              </span>
            </div>

            <div className={styles.button}>
              <span>Sign now</span>
              <img src="./src/assets/sign-now-icon.svg" alt="sign-now-icon" />
            </div>
          </form>
        </div>
      </div>

      <div className={styles.socialSection}>
        <div className={styles.social}>
          <div className={styles.firstRow}>
            <div className={styles.logo}>
              <span className="material-symbols-outlined text-7xl text-neutral-0">
                museum
              </span>
            </div>

            <div className={styles.content}>
              <span className={styles.address}>
                Av. Chedid Jafet, 222 - Vila Olimpa - São Paulo/SP - CEP
                04551-065 • © 2024 Company Group
              </span>

              <span className={styles.policies}>
                Privacy policies • Cookies policies • Use terms
              </span>
            </div>
          </div>

          <div className={styles.secondRow}>
            <div className={styles.socialIcons}>
              <img src="./src/assets/linked-in-icon.svg"></img>
              <img src="./src/assets/youtube-icon.svg"></img>
            </div>
            <div className={styles.socialIcons}>
              <img src="./src/assets/global-pact-icon.svg"></img>
              <img src="./src/assets/ccro-icon.svg"></img>
              <img src="./src/assets/ods-icon.svg"></img>
              <img src="./src/assets/gptw-icon.svg"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.termsSection}>
        <div className={styles.terms}>
          <span>
            This site is protected by reCAPTCHA and by <u>Use terms</u> and
            Google <u>Privacy policies</u>
          </span>
        </div>
      </div>
    </footer>
  );
}
