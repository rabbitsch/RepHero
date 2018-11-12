import React from "react";
import { connect } from "react-redux";
import store from "../store";

import OfficeSearchForm from "./OfficeSearchForm";
import "./doctorinfo.css";
import "../grid.css";

export const RenderDocData = props => {
  console.log({ props });
  // return <p>Soon.</p>;
  console.log(props, "this is my props");
  const data = props.practice;

  console.log(data, "this is my data from renderdoc");

  if (!data) {
    // return <p>Search for Doctor Information.</p>;
    return (
      <div className="col-5 offset-1">
        <div className="doc-container1">
          <h3>Search for Doctor Information.</h3>
          <OfficeSearchForm />
        </div>
      </div>
    );
  }
  console.log(data, "this is my data");

  return (
    <section>
      <div>
        <div className="col-5 offset-1">
          <div className="doc-container">
            <div className="docsearchAgain">
              <h3> Search another specialty</h3>
              <OfficeSearchForm />
            </div>
            <ul>
              {data.map(item => (
                <li key={item.uid}>
                  <h2>{item.name}</h2>
                  <div>
                    {item.doctors.map(item => (
                      <li key={item.uid}>
                        <h4>
                          {item.profile.first_name} {item.profile.last_name},{" "}
                          {item.profile.title}
                        </h4>
                        <p>NPI: {item.npi}</p>
                      </li>
                    ))}
                  </div>

                  <p>{item.visit_address.street}</p>
                  <p>
                    {item.visit_address.city}, {item.visit_address.state_long},{" "}
                    {item.visit_address.zip}
                  </p>
                  <div>
                    {item.phones.map(item => (
                      <li key={item.uid}>
                        <p>
                          {item.type}: {item.number}
                        </p>
                      </li>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return { practice: state.reducer.practice };
};

export default connect(mapStateToProps)(RenderDocData);
