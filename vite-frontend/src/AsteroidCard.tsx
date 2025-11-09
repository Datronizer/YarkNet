import type { FC } from "react";
import type { Asteroid } from "./Home";

const AsteroidCard: FC<{ asteroid: Asteroid }> = ({ asteroid }) =>
{
    return (
        <div className="asteroid-card" style={{
            background: "#0b0b0b",
            border: "1px solid #222",
            padding: "12px",
            borderRadius: "6px",
            color: "#fff",
            minWidth: "220px"
        }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>{asteroid.full_name}</h3>
            <p style={{ margin: "4px 0" }}>H: <strong>{asteroid.H}</strong></p>
            <p style={{ margin: "4px 0" }}>a: {Number(asteroid.a).toFixed(3)} AU</p>
            <p style={{ margin: "4px 0" }}>e: {Number(asteroid.e).toFixed(4)}</p>
            <p style={{ margin: "4px 0" }}>i: {Number(asteroid.i).toFixed(2)}°</p>
            <p style={{ margin: "4px 0" }}>epoch: {asteroid.epoch}</p>
        </div>
    );
};

export default AsteroidCard;
