const MyFooter = function () {
  return (
    <footer className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-8">
          <i className="bi bi-facebook me-2"></i>
          <i className="bi bi-instagram me-2"></i>
          <i className="bi bi-twitter-x me-2"></i>
          <i className="bi bi-youtube"></i>
          <div className="row justify-content-center g-1">
            <div className="col-12 col-md-4 col-lg-4 col-xl-">
              <ul className="list-unstyled">
                <li>
                  <a className="nav-link">Audio and Subtitles</a>
                </li>
                <li>
                  <a className="nav-link">Media Center</a>
                </li>
                <li>
                  <a className="nav-link">Privacy</a>
                </li>
                <li>
                  <a className="nav-link">Contact us</a>
                </li>
              </ul>
              <button className="btn btn-black border border-white text-white">
                Service code
              </button>
              <p className="small pt-4">© 1997-2019 Netflix, inc.</p>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <a className="nav-link">Help</a>
                </li>
                <li>
                  <a className="nav-link">Jobs</a>
                </li>
                <li>
                  <a className="nav-link">Cookie Preferences</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <a className="nav-link">Gift Cards</a>
                </li>
                <li>
                  <a className="nav-link">Terms of Use</a>
                </li>
                <li>
                  <a className="nav-link">Corporate information</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MyFooter
