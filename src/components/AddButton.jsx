const Add = ({ colors }) => {
  return (
    <div className="mx-auto w-100 text-center mb-3">
      <button
        style={{ backgroundColor: colors.Pink }}
        className="btn d-flex align-items-center mx-auto"
        dir="rtl"
      >
        ساخت مخاطب جدید{" "}
        <span className="me-1">
          <i className="fa fa-plus-circle" />
        </span>
      </button>
    </div>
  );
};
export default Add;
