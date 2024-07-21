import notFound from "../../assets/no-found.gif";
import colors from "../../helpers/theme";
const NotFound = ({ textValue }) => {
    return (
        <div className="text-center py-5" style={{ backgroundColor: colors.CurrentLine }}>
            <h2 style={{ color: colors.Orange }}>{textValue}</h2>
            <img src={notFound} alt="not found" className="w-50" />
        </div>
    )
}
export default NotFound