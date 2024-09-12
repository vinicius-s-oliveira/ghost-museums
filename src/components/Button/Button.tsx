import styles from "./Button.module.scss";

enum ButtonType {
  "filled",
  "outline",
  "borderless",
}

interface ButtonProps {
  title: string;
  onClick: () => void;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = "borderless",
}) => {
  return (
    <div className={styles.button}>
      {type === "borderless" && (
        <button className={styles.buttonBorderless} onClick={onClick}>
          <span>{title}</span>
        </button>
      )}

      {type === "outline" && (
        <button className={styles.buttonOutlined} onClick={onClick}>
          <span>{title}</span>
        </button>
      )}

      {type === "filled" && (
        <button className={styles.buttonFilled} onClick={onClick}>
          <span>{title}</span>
        </button>
      )}
    </div>
  );
};

export default Button;
