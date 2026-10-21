import ProfileOrderBox from "./ProfileOrderBox.jsx";
import LineSeparator from "../../ui/LineSeparator.jsx";

function FinishedOrders() {
    return (
        <div className="min-h-100 max-h-150 overflow-y-auto flex flex-col items-center px-2 ">

            <ProfileOrderBox />

            <LineSeparator />

            <ProfileOrderBox />

            <LineSeparator />

            <ProfileOrderBox />

        </div>
    );
}

export default FinishedOrders;