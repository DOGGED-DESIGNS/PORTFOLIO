const Tecnologies = () => {
  return (
    <>
      <section className="technologies">
        <h4 className="technologies__text">technologies</h4>
        <p>
          I’ve worked with a range of technologies in the web development world
          from Back-end To Design.
        </p>
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-md-6 pb-5">
            <div className="m-auto technologies__font">
              <div className="technologies__font--img">
                <img src="./img/front-end.svg" alt="" />
              </div>
              <h4 className="font-weight-bold text-white text-capitalize roboto">
                front-end
              </h4>
              <p className="text-secondary rales">
                Experience with React.js, vanilla javaScript, html , Sass,
                jQuery, css
              </p>
            </div>
          </div>
          <div className="col-lg-3 pb-5 col-sm-12 col-md-6">
            <div className="m-auto technologies__font">
              <div className="technologies__font--img">
                <img src="./img/database.svg" alt="" />
              </div>
              <h4 className="font-weight-bold text-white text-capitalize roboto">
                back-end
              </h4>
              <p className="text-secondary rales">
                Experience with Node.js, PHP and Databases i.e Mysql,
                postgres,Mongodb
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6 pb-5">
            <div className="m-auto technologies__font">
              <div className="technologies__font--img">
                <img src="./img/ui_ux.svg" alt="" />
              </div>
              <h4 className="font-weight-bold text-white text-capitalize roboto">
                UI/UX
              </h4>
              <p className="text-secondary rales">
                Experience with tools like Adobe XD, Photoshop and illustrator
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologies;
