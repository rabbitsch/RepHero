import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import CrmForm from "./crm-form-officetitle";
import { deleteData } from "../apiClients";
import { putData } from "../apiClients";
import { postData } from "../apiClients";
import store from "../store";
import CrmFormpt2 from "./crmformpt2";
import "../grid.css";
import "./crmform.css";

import NewVisitForm from "./NewVisitForm";
import VisitList from "./VisitList";

const officesAndVisits = [
  {
    officeTitle: "Dr. Something",
    visits: [{ visit: 1 }, { visit: 2 }, { visit: 3 }, { visit: 4 }]
  },
  {
    officeTitle: "Dr. Something",
    visits: [{ visit: 1 }, { visit: 2 }, { visit: 3 }, { visit: 4 }]
  },
  {
    officeTitle: "Dr. Something",
    visits: [{ visit: 1 }, { visit: 2 }, { visit: 3 }, { visit: 4 }]
  },
  {
    officeTitle: "Dr. Something",
    visits: [{ visit: 1 }, { visit: 2 }, { visit: 3 }, { visit: 4 }]
  }
];

const MainPage = props => {
  // goes through all visits of all offices and attach onUpdate and onDelete
  // callback to each visit object
  const offices = props.offices.map(office => ({
    ...office,
    visits: office.visits.map(visit => ({
      ...visit,
      onUpdate: id => {
        console.log(`Visit ID: ${id}`);
        console.log("Do something when an user clicks the Update button");
      },
      onDelete: deleteData
    }))
  }));

  return (
    <div>
      {offices.map(office => {
        return (
          <div>
            <div className="officeTitle">
              <h3> Office: {office.title}</h3>{" "}
              <button
                onClick={event => {
                  return putData(office.id);
                }}
              >
                Update
              </button>
              <button
                onClick={event => {
                  return deleteData(office.id);
                }}
              >
                Delete
              </button>
            </div>

            <NewVisitForm
              officeId={office.id}
              onSubmit={newVisit => postData(newVisit)}
            />
            <hr />
            <VisitList visits={office.visits} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  const offices = state.reducer.crm.map(office => ({
    ...office,
    visits: state.reducer.content.filter(
      visit => office.id === visit.office._id
    )
  }));

  return { offices };
};

export default connect(mapStateToProps)(MainPage);
