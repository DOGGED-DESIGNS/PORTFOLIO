const Contact = () => {
  return (
    <>
      <section className="call">
        <h1 className="call__text">Contact</h1>

        <div className="row">
          <div className="pb-5 col-lg-3 col-sm-12 col-md-6">
            <div className="m-auto p-3 call__font">
              <h4 className="font-weight-bold text-white text-capitalize roboto">
                Call
              </h4>
              <p className="text-secondary rales">+234 907 617 6485</p>
            </div>
          </div>
          <div className="pb-5 col-lg-3 col-sm-12 col-md-6">
            <div className="m-auto p-3 call__font">
              <h4 className="font-weight-bold text-white text-capitalize roboto">
                Email
              </h4>
              <p className="text-secondary rales">uzoechijerry@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
