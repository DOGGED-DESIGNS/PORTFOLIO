import { Data } from "../data";

import { Button } from "@mui/material";

const Project = () => {
  return (
    <>
      <section class="project">
        <h3 class="project__text">projects</h3>
        <div class="row mt-5 justify-content-center">
          {Data.projects.map((pro) => {
            return (
              <div class="p-5 justify-content-center col-lg-6 col-md-6 col-sm-12 pb-5">
                <div class="project__card">
                  <div class="project__card--img">
                    <img src={pro.img} alt="" />
                  </div>

                  <h4>{pro.name}</h4>
                  <p>{pro.des}</p>
                  <h3 className="text-white font-weight-bolder text-capitalize text-center">
                    stack
                  </h3>
                  <div className="px-3 mb-4 d-flex justify-content-between">
                    {pro.stack.map((st) => {
                      return (
                        <h6 className="text-secondary text-capitalize">{st}</h6>
                      );
                    })}
                  </div>

                  <div className="code-btn">
                    <a href={pro.code} className="btn2">
                      code
                    </a>
                    <a className="btn2" href={pro.visit}>
                      visit
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <section className="project">
        <h3 className="project__text">projects</h3>
        <div className="row mt-5 justify-content-center">
          {Data.projects.map((pro) => {
            return (
              <div className="p-5 d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 pb-5">
                <div className="project__card">
                  <div className="project__card--img">
                    <img src={pro.img} alt="" />
                  </div>

                  <h4>{pro.name}</h4>
                  <p>{pro.des}</p>

                  <h3 className="text-white font-weight-bolder text-capitalize text-center">
                    stack
                  </h3>
                  <div className="px-3 mb-4 d-flex justify-content-between">
                    {pro.stack.map((st) => {
                      return (
                        <h5 className="text-secondary text-capitalize">{st}</h5>
                      );
                    })}
                  </div>

                  <div className="code-btn">
                    <a href={pro.code} className="btn2">
                      code
                    </a>
                    <a className="btn2" href={pro.visit}>
                      visit
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}
    </>
  );
};

export default Project;
