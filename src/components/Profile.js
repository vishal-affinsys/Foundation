import "./Profile.css";
import NAMES from "./chatData.json";

export const Profile = () => {
  return (
    <div className="user-profile-picture">
      <table>
        <tr>
          <td>
            <img src={NAMES["profile"]["picture"]} className="profile-image" />
          </td>
          <td>
            <span className="profile-name">Hi, {NAMES["profile"]["name"]}</span>
            <div className="profile-status">
              Your Status: {NAMES["profile"]["status"]}{" "}
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};
