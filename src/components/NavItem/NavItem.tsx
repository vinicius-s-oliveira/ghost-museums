import styles from "./NavItem.module.scss";

interface NavItemProps {
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <li className={styles.navItem}>
      <a href="#">{title}</a>
    </li>
  );
};

export default NavItem;
