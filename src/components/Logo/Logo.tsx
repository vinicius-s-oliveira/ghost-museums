import styles from "./Logo.module.scss";

interface LogoProps {
  icon: string;
}

const Logo: React.FC<LogoProps> = ({ icon }) => {
  return (
    <div className={styles.logo}>
      <img src={icon} alt="logo-icon" />
    </div>
  );
};

export default Logo;
