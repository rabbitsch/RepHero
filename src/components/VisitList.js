import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
//import "../grid.css";
//import "./crmform.css";

import Visit from "./Visit";

export const VisitList = props => (
  <Scrollbars style={{ width: 500, height: 300 }}>
    <ul>
      {props.visits.map(visit => (
        <li key={visit.uid}>
          <Visit {...visit} />
        </li>
      ))}
    </ul>
  </Scrollbars>
);

export default VisitList;
