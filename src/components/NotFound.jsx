import DontFound from "../assets/no-found.gif";
import colors from "../helpers/theme";
const NotFound = () => {
    return (
        <div
            className="text-center py-5"
            style={{ backgroundColor: colors.CurrentLine }}
        >
            <h2 style={{ color: colors.Orange }}>کاربری یافت نشد</h2>
            <img src={DontFound} alt="not found" className="w-25" />
        </div>
    )
}
export default NotFound