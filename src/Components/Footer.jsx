const Footer = () => {
    return (
        <div>
            {/* Hero Section with Background Image */}
            <div className="bg-white shadow-xl  h-40 w-7/12 m-auto rounded-md justify-center relative top-20 bg-cover bg-center">
                <br />
                <h1 className="text-center text-xl font-bold text-gray-800">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-center text-gray-600">Beyond Boundaries Beyond Limits</p>
                <div className="flex m-auto w-64 mt-4">
                    <input 
                        type="text"
                        placeholder="username@site.com"
                        className="input rounded-sm input-bordered join-item w-2/3" 
                    />
                    <button className="btn btn-primary join-item text-white w-1/3">Subscribe</button>
                </div>
            </div>
  
  
                          
            {/* Footer Section */}
            <footer className="footer bg-black text-white mt-10 p-10">
            <img src="/src/assets/logo-footer.png" alt="" />
                {/* Services Section */}
                <nav className="mt-5">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
  
                {/* Company Section */}
                <nav className="mt-5">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
  
                {/* Legal Section */}
                <nav className="mt-5">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
  
                {/* Newsletter Section */}
                <form className="mt-5">
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered join-item w-2/3"
                            />
                            <button className="btn btn-primary join-item text-white w-1/3">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
  };
  
  export default Footer;
  