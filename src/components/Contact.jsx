import profile from "../assets/man-taking-note.png";

const Contact = ({ colors, data }) => {
  // const imageURL = URL.createObjectURL(data.image)
  return (
    <div
      className="col-10 col-lg-6 mx-auto d-flex flex-row align-items-center justify-content-around card"
      style={{ backgroundColor: colors.CurrentLine }}
      dir="rtl"
    >
      <div className="card-body d-flex align-items-center justify-content-around">
        <div className="col-4">
          <img src={profile} className="img-fluid rounded" alt="profile" />
        </div>
        <div className="col-7">
          <ul
            className="list-group mx-auto p-0 px-2"
          >
            <li
              className="list-group-item list-group-item-dark"
              style={{
                backgroundColor: colors.backGround,
                borderColor: colors.CurrentLine,
                color : colors.Foreground
              }}
            >
              نام و نام خانوادگی : <span className="fw-bold">{data.name}</span>
            </li>
            <li
              className="list-group-item list-group-item-dark"
              style={{
                backgroundColor: colors.backGround,
                borderColor: colors.CurrentLine,
                color : colors.Foreground
              }}
            >
              شماره موبایل : <span className="fw-bold">{data.number}</span>
            </li>
            <li
              className="list-group-item list-group-item-dark"
              style={{
                backgroundColor: colors.backGround,
                borderColor: colors.CurrentLine,
                color : colors.Foreground
              }}
            >
              آدرس ایمیل : <span className="fw-bold">{data.email}</span>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column col-1 text-center">
          <button
            className="btn my-1"
            style={{ backgroundColor: colors.Orange }}
          >
            <i
              className="fa fa-eye w-100 h-100"
              style={{ backgroundColor: colors.Orange }}
            />
          </button>
          <button className="btn my-1" style={{ backgroundColor: colors.Cyan }}>
            <i
              className="fa fa-pen w-100 h-100"
              style={{ backgroundColor: colors.Cyan, color: "black" }}
            />
          </button>
          <button className="btn my-1" style={{ backgroundColor: colors.Red }}>
            <i
              className="fa fa-trash w-100 h-100"
              style={{ backgroundColor: colors.Red }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
