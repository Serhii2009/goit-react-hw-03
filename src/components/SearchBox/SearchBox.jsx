export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
