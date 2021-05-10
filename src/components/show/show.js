import "./show.css";

export default function Show({ currentShow }) {
  const { name, premiered, summary, image } = currentShow || {};

  const formattedGenres =
    currentShow.genres && currentShow.genres.length
      ? `${currentShow.genres.join(", ")}`
      : "";

  const formattedPremieredDate = premiered ? `Premiered on ${premiered}` : "";

  return (
    <div className="container">
      <div className="row">
        <div className="seasonImage">
          {image ? <img src={image} alt="Show Preview" /> : "NA"}
        </div>
        <div className="col-sm-8">
          <h1>{name}</h1>
          <div className="showInfo">
            {`${formattedGenres}${
              formattedGenres && formattedPremieredDate ? " | " : ""
            }${formattedPremieredDate}`}
          </div>
          <div className="showSummary">{summary}</div>
        </div>
      </div>
    </div>
  );
}
