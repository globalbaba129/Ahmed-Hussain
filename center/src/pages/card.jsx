import React from 'react';

function Card() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Language learning for adults</h5>
              <a href="#" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Study English in the USA</h5>
              <a href="#" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Language learning for kids and teens</h5>
              <a href="#" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
