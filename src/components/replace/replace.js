export default function Replace(props) {
  //   console.log("props :>> ", props);
  const handleSeasonChange = (event) => {
    console.log("event :>> ", event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">Replace</div>
        <div className="col">
          <select
            name="seasons"
            className="seasons"
            onChange={handleSeasonChange}
          >
            {/* IN HERE DO MAP AND CONCAT
            {seasons.map(season => (<option>Season {season.seasonNumber??}</option>))}
            FINISH HERE
            YOUR THOUGHT PROCESS WAS TO MAP THROUGH AND GET THE SEASON NUMBER
 */}

            <option>Season 1</option>
            <option>Season 2</option>
            <option>Season 3</option>
          </select>
        </div>
        <div className="col">
          <button onClick={props.setShow}>Search</button>
        </div>
      </div>
    </div>
  );
}
