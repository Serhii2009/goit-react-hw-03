export const Options = ({ onFeedback, onReset, hasFeedback }) => {
  return (
    <div>
      <button className="list-buttons" onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className="list-buttons" onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className="list-buttons" onClick={() => onFeedback("bad")}>
        Bad
      </button>

      {hasFeedback > 0 && (
        <button className="list-buttons" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
