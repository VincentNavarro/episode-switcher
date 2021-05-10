import "./error.css";

export default function Error({ onError }) {
  const { error, type, name } = onError;

  const showError = `There is no show matching '${name}'`;
  const matchError = `There is no matching episode for the season, episode, and show provided.`;

  return error ? (
    <div className="container">
      <div className="error">{type === "match" ? matchError : showError}</div>
    </div>
  ) : (
    ""
  );
}
