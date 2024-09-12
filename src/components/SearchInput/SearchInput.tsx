import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className={styles.searchInput}>
      <input placeholder={placeholder} />
      <img src="./src/assets/search.svg" />
    </div>
  );
};

export default SearchInput;
