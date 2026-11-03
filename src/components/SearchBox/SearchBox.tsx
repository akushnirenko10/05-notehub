import css from "./SearchBox.module.css";

interface SearchBoxProps {
  query: string;
  handleSearch: (query: string) => void;
}

export default function SearchBox({ query, handleSearch }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={query}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
