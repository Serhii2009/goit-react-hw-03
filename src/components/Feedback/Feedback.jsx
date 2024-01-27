import { Notification } from "../Notification/Notification";

export const Feedback = ({ feedbackTypes }) => {
  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positivProcent =
    totalFeedback > 0
      ? Math.round(
          ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
        )
      : 0;
  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {feedbackTypes.good}</p>
          <p>Neutral: {feedbackTypes.neutral}</p>
          <p>Bad: {feedbackTypes.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positivProcent}%</p>
        </>
      ) : (
        <Notification />
      )}
    </div>
  );
};
