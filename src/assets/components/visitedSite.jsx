import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

//style
import "../styles/visitedSite.css";
export default function visitedSite(props) {
  //destructed props
  const {
    title,
    startDate,
    location,
    imageUrl,
    googleMapsUrl,
    endDate,
    description,
  } = props.details;
  console.log(props);

  //icon component
  const locationIcon = (
    <FontAwesomeIcon
      icon={faLocationDot}
      style={{ color: "#F55A5A", paddingRight: "5px" }}
    />
  );
  return (
    <div className="site-container">
      <img src={imageUrl} />
      <div className="site-info-container">
        <p>
          <span>{locationIcon}</span>
          <span>{location}</span>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </p>
        <h2 className="title">{title}</h2>
        <p className="date">
          {startDate} - {endDate}
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
