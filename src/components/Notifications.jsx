import { userDeets } from "./UserData";
import kycIcon from "../assets/icons/KYC.svg";
import botIcon from "../assets/icons/trade-bot.svg";

export default function Notifications() {
  return (
    <>
      {userDeets().balance < 10 && (
        <div className="dashboard-notification">
          Low balance, please make a deposit
        </div>
      )}
      {!userDeets().KYC && (
        <div
          className="dashboard-notification"
          style={{ color: "rgba(230, 150, 150, 0.8)" }}
        >
          <img src={kycIcon} alt="KYCicon" className="notification-icon" /> KYC
          Verification required!
        </div>
      )}
      <div className="dashboard-notification">
        <img src={botIcon} alt="botIcon" className="notification-icon" />
        {userDeets().autoTrade
          ? "Trading bot is active"
          : "Auto trade disabled"}
      </div>
    </>
  );
}
