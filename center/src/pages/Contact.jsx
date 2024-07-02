

import React from 'react'

function Contact() {
  return (
    <>
    <>
  <div className="container">
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarsExampleDefault"
    >
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            Home
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="category.html">
            Categories <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="product.html">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="cart.html">
            Cart
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">
            Contact
          </a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <div className="input-group input-group-sm">
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search..."
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-secondary btn-number">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
        <a className="btn btn-success btn-sm ml-3" href="cart.html">
          <i className="fa fa-shopping-cart" /> Cart
          <span className="badge badge-light">3</span>
        </a>
      </form>
    </div>
  </div>
  <section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading">CONTACT US</h1>
      <p className="lead text-muted mb-0">
      Linguestic offers a range of language and culture courses for adults, kids and teens, businesses, and more. Choose from the options below to find your ideal course and start progressing further with us.
      </p>
    </div>
  </section>
  <div className="container">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <i className="fa fa-envelope" /> Contact us.
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required=""
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={6}
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="mx-auto">
                <button type="submit" className="btn btn-primary text-right">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4">
        <div className="card bg-light mb-3">
          <div className="card-header bg-success text-white text-uppercase">
            <i className="fa fa-home" /> Address
          </div>
          <div className="card-body">
            <p>3 rue des Champs Elysées</p>
            <p>75008 PARIS</p>
            <p>France</p>
            <p>Email : email@example.com</p>
            <p>Tel. +33 12 56 11 51 84</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="text-light">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-4 col-xl-3">
          <h5>About</h5>
          <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
          <p className="mb-0">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
          <h5>Informations</h5>
          <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
         
        </div>
        
      </div>
    </div>
  </footer>
</>

 </>
  )
}

export default Contact
