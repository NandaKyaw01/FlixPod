import { CommunityIcon } from "../../icon";

const DetailCard = ({ profile, name, character }) => {
  return (
    <div style={{ marginRight: "20px" }}>
      <div
        className="card"
        style={{
          width: "138px",
          height: "270px",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#1a161f",
        }}
      >
        {profile !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${profile}`}
            className="card-img-top"
            style={{
              width: "100%",
              height: "175px",
              objectFit: "cover",
            }}
            alt="..."
          />
        ) : (
          <img
            src={require("../../assets/usericon.jpg")}
            className="card-img-top"
            style={{
              width: "100%",
              height: "175px",
              objectFit: "cover",
            }}
            alt="..."
          />
        )}
        <div className="card-body" style={{ padding: "8px" }}>
          <h5
            className="card-title"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {name}
          </h5>
          <p
            className="card-text"
            style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            {character}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
