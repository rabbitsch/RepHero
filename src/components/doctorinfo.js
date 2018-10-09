import React from "react";
import { connect } from "react-redux";
import store from "../store";

export const RenderDocData = props => {
  console.log({ props });
  // return <p>Soon.</p>;

  const { data } = props.practice;

  if (!data) {
    return <p>Search for Doctor Information.</p>;
  }
  console.log(data, "this is my data");

  return (
    <div className="doc-container">
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
  );
};

const mapStateToProps = state => {
  return { practice: state.practice };
};

export default connect(mapStateToProps)(RenderDocData);
