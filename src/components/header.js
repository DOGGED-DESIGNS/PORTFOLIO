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
              designer <br />
              Welcome to my portfolio website, a digital showcase of my journey
              as a fullstack web developer! Here, you'll delve into a world of
              creativity, innovation, and functional elegance. With a passion
              for both the front-end and back-end realms of web development,
              I've woven together a collection of projects that reflect my
              dedication to crafting seamless user experiences and robust
              technical solutions. Whether you're an industry professional
              seeking a versatile developer or simply a fellow enthusiast of all
              things web, I invite you to explore the depths of my portfolio.
              Thank you for visiting, and I'm excited to share my passion for
              fullstack web development with you.
            </p>

            <a className="btn1" href="#About">
              learn more
            </a>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="m-auto personal__gif">
              <img src="./img/doggedimg.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
