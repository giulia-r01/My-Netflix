import { Col, Row } from "react-bootstrap"
import MyNavbar from "./MyNavbar"

const SettingPage = function () {
  return (
    <>
      <main className="bg-white pt-5">
        <section className="container pt-5 pb-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-9 col-xl-9">
              <h2 className="border-bottom border-secondary-subtle text-black">
                Account
              </h2>
              <div className="row justify-content-center g-1">
                <div className="col-12 col-md-4">
                  <h5 className="text-body-tertiary pt-3">
                    MEMBERSHIP & BILLING
                  </h5>
                  <p className="small bg-secondary-subtle text-center px-2 me-5 py-2 text-black">
                    Cancel Membership
                  </p>
                </div>
                <div className="col-12 col-md-8 border-bottom border-secondary-subtle">
                  <div className="row">
                    <div className="col-12 col-md-6 pt-3">
                      <div className="">
                        <ul className="list-unstyled">
                          <li className="small fw-bold text-black">
                            student@strive.school
                          </li>
                          <li className="text-body-tertiary small">
                            Password: ******
                          </li>
                          <li className="text-body-tertiary small">
                            Phone: 123 456 7890
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 pt-3 text-md-end">
                      <ul className="list-unstyled">
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Change account email
                          </a>
                        </li>
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Change Password
                          </a>
                        </li>
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Change Phone number
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row border-top border-secondary-subtle">
                    <div className="col-12 col-md-6 pt-3">
                      <div className="">
                        <ul className="list-unstyled">
                          <li className="small fw-bold text-black">
                            <i className="bi bi-paypal"></i> <em>PayPal</em>{" "}
                            admin@strive.school
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 pt-3 text-md-end">
                      <ul className="list-unstyled">
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Update Payment Info
                          </a>
                        </li>
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Billing details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row border-top border-secondary-subtle">
                    <div className="col-12 col-md-12 pt-3 text-md-end">
                      <ul className="list-unstyled">
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Redeem gift card or promo code
                          </a>
                        </li>
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Where to buy gift cards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row border-top border-bottom border-secondary-subtle">
                <div className="col-12 col-md-4">
                  <h5 className="text-body-tertiary pt-3">PLAN DETAILS</h5>
                </div>
                <div className="col-12 col-md-4 pt-3">
                  <ul className="list-unstyled">
                    <li className="small fw-bold text-black">
                      Premium{" "}
                      <span className="border px-1 border-black">
                        ULTRA <span className="fw-bold">HD</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-4 pt-3 text-md-end">
                  <ul className="list-unstyled">
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Change plan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row border-top border-bottom border-secondary-subtle">
                <div className="col-12 col-md-4">
                  <h5 className="text-body-tertiary pt-3">SETTINGS</h5>
                </div>
                <div className="col-12 col-md-8 pt-3">
                  <ul className="list-unstyled">
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Parental controls
                      </a>
                    </li>
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Test partecipation
                      </a>
                    </li>
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Manage download devices
                      </a>
                    </li>
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Activate a device
                      </a>
                    </li>
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Recent device streaming activity
                      </a>
                    </li>
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Sing out of all devices
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row border-top  border-secondary-subtle">
                <div className="col-12 col-md-4">
                  <h5 className="text-body-tertiary pt-3">MY PROFILE</h5>
                </div>
                <div className="col-12 col-md-4 pt-3">
                  <ul className="list-unstyled">
                    <li className="small fw-bold text-black">Strive Student</li>
                  </ul>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled">
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Language
                          </a>
                        </li>
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Playback settings
                          </a>
                        </li>
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Subtitle appearance
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled">
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            View activity
                          </a>
                        </li>
                        <li className="small">
                          <a className="text-decoration-none" href="#">
                            Ratings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 pt-3 text-md-end">
                  <ul className="list-unstyled">
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Manage profiles
                      </a>
                    </li>
                    <li className="small">
                      <a className="text-decoration-none" href="#">
                        Add profile email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default SettingPage
