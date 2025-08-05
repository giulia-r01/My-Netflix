import { Button } from "react-bootstrap"

const ProfilePage = function () {
  return (
    <>
      <main className="pt-5">
        <section className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <h2 className="border-bottom border-secondary-subtle">
                Edit Profile
              </h2>
              <div className="row justify-content-center g-1">
                <div className="col-md-2 text-center">
                  <img className="img-fluid" src="avatar.png" />
                </div>
                <div className="col-md-10">
                  <p className="bg-secondary text-white px-2 me-5 py-2 ms-4">
                    Strive Student
                  </p>
                  <div className="ms-4 border-bottom border-secondary pb-4 me-3">
                    <p>Language:</p>
                    <div className="dropdown">
                      <Button
                        className="btn btn-black border border-white text-white dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        variant="dark"
                      >
                        English
                      </Button>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            Italian
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Spanish
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            French
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            German
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="ms-4 border-bottom border-secondary pb-4 me-3">
                    <p>Maturity settings:</p>
                    <span className="fw-bold bg-secondary text-white px-3 py-2">
                      ALL MATURITY RATINGS
                    </span>
                    <p className="small pt-4">
                      Show titles of all maturity ratings for this profile
                    </p>
                    <Button
                      className="btn btn-black border border-white text-white"
                      type="button"
                      variant="dark"
                    >
                      EDIT
                    </Button>
                  </div>

                  <div className="ms-4 pb-4 me-3">
                    <p>Autoplay controls</p>
                    <span className="fw-bold bg-secondary text-white px-3 py-2">
                      ALL MATURITY RATINGS
                    </span>
                    <div className="form-check pt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Autoplay next episode in a series on all devices
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        Autoplay previews while browsing on all devices
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 border-top border-secondary-subtle">
                <Button className="btn btn-light me-3">SAVE</Button>
                <Button className="btn btn-dark me-3">CANCEL</Button>
                <Button className="btn btn-dark">DELETE PROFILE</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ProfilePage
