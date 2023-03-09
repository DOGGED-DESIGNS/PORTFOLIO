const Header = () => {
  return (
    <>
      <section className="personal">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="personal__personal">
              welcome to my personal portfolio
            </h2>

            <p className="personal__p">
              I am uzoechi jeremiah a fullstack web developer and graphic
              designer who is passionate about technology. i enjoy helping
              clients solve problems with the use of technology by developing
              and desinging website. Having a proper and compelling design or
              development is essential for the growth of any business or start
              up, in this regard{" "}
              <span className=" font-weight-bold">DOGGED DESIGNS</span>
            </p>

            <a className="btn1" href="#">
              learn more
            </a>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="m-auto personal__gif">
              <img src="./img/portfolio main2 gif.gif" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
