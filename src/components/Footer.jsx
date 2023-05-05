import Logo from "../assets/imgs/nafes_plus_logo.png";

function Footer() {
    return ( <>
      <div className=" mt-4  w-full shadow-1 ">
        <div className="grid">
          <div className=" col-2">
            <img src={Logo} alt="" className=" w-5"  />
          </div>
        </div>
      </div>
    </> );
}

export default Footer;