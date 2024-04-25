import colors from "../helpers/theme";
const AddContact = () => {
    return (
        <div>
            <form>
                <div className="col-10 col-md-6 col-lg-4 mx-auto d-flex flex-column gap-3 ">
                    <label htmlFor="inp1" className="text-light">نام و نام خانوادگی</label>
                    <input type="text" className="form-control" id="inp1" />
                    <label htmlFor="inp2"></label>
                    <input type="text" className="form-control" id="inp2" />
                    <label htmlFor="inp3"></label>
                    <input type="text" className="form-control" id="inp3" />
                    <label htmlFor="inp4"></label>
                    <input type="text" className="form-control" id="inp4" />
                    <button className="w-100 btn mt-3" style={{backgroundColor : colors.Cyan}}>اضافه کردن</button>
                </div>
            </form>
        </div>
    )
}
export default AddContact;