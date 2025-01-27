import React from 'react'

function footer() {
  
  return (
<footer className="bg-dark text-center text-white">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-google" />
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
  </div>
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2023 Copyright:
    <a className="text-white" href="index.html">
      Hotel Name
    </a>
  </div>
</footer>

  )
}

export default footer