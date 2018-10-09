import React from "react";
import { connect } from "react-redux";
import store from "../store";

export const RenderDocData = props => {
  console.log({ props });
  // return <p>Soon.</p>;

  const { data } = props.practice;

  if (!data) {
    return <p>No data.</p>;
  }

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.uid}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

//
// export const Content = (props) => {
//   console.log(props, "before my guess on display cont")
//   console.log(store.getState(),' store from my display cont')
//   const guesses = props.guesses.map((guess, index) =>(<li key={index}>{guess}</li>));
//   console.log(guesses, 'from display cont')
//
//   return (
//     <div>
//       <ul className="contentDisp">
//         {guesses}
//         <li>{props.feedback}</li>
//       </ul>
//     </div>
//   )
// }

// RenderDocData.defaultProps =({
//   practice: []
//
// })

const mapStateToProps = state => {
  console.log(state, "this my state");
  return { practice: state.practice };
};

export default connect(mapStateToProps)(RenderDocData);
