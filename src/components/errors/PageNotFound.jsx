import { Link } from "react-router-dom";
import styles from "../../styles/NoPage.module.css";
import notFound from "../../assets/no-found.gif";
import colors from "../../helpers/theme";
const NoPage = () => {
  const color = colors;
  return (
    <div className={`text-light ${styles.main}`}>
      <div className="col-12 col-md-5 mx-auto text-center d-flex flex-column gap-4 rounded p-5" style={{ backgroundColor: color.CurrentLine }}>
        <h2>Page Not Found</h2>
        <img src={notFound} alt="Error 404" className={`mx-auto py-3 ${styles.image}`} />
        <h2>Error Code 404</h2>
        <div className="d-block">
          <Link to={"/"} className={`${styles.link} d-inline`}>Main Page</Link>
        </div>
      </div>
    </div>
  );
};
export default NoPage;
