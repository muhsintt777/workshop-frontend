import "./Public.css";
import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section>
      <header>
        <h1>
          Welcome to <span className="nowrap">Joseph Seed Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Hope City, Joseph Seed Repairs provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Joseph Seed Repairs
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href="tel:+19876543210">(987) 654-3210</a>
        </address>
        <br />
        <p>Owner: Joseph Seed</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
