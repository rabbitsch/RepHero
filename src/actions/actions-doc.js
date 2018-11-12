import { doctorData } from "../doctorData";
import { locationData } from "../locationData";
import store from "../store";

export const SEARCH_PRACTICES = "SEARCH_PRACTICES";
export const searchPractices = ({ name, location }) => dispatch => {
  console.log("searchPractices:", { name, location });

  Promise.resolve()
    .then(() => {
      if (location && location.length !== 0) {
        // Return a promise that
        // resolves a geocoded version of the location query

        return locationData(location);
      }
    })
    .then(payload => {
      // extract coords from the HTTP payload
      if (payload) {
        const { lat, lng } = payload.results[0].geometry.location;
        return { lat, lng };
      }
    })
    .then(coords => {
      const location = `${coords.lat},${coords.lng},100`;
      return doctorData({ name, location });
    })
    .then(payload => {
      return payload.data;
    })
    .then(practices => {
      console.log({ practices });
      store.dispatch(searchPracticeSuccess(practices));
    })
    .catch(console.error.bind(console));

  // doctorData(practice)
  //   .then(info => {
  //     console.log(info, "this is my action search practice info");
  //     dispatch(searchPracticeSuccess(info));
  //   })
  //   .catch(error => searchPracticeError(error));
  //
  // locationData(location)
  //   .then(info => {
  //     console.log(
  //       info.results[0].geometry.location,
  //       "this is my action search LOCATION info"
  //     );
  //     dispatch(searchPracticeSuccess(info)); //This is the Problem..
  //   })
  //   .catch(error => searchPracticeError(error));
};

export const SEARCH_PRACTICES_SUCCESS = "SEARCH_PRACTICES_SUCCESS";
export const searchPracticesSuccess = practice => ({
  type: SEARCH_PRACTICES_SUCCESS,
  practice
});

export const SEARCH_PRACTICES_ERROR = "SEARCH_PRACTICES_ERROR";
export const searchPracticesError = error => ({
  type: SEARCH_PRACTICES_ERROR,
  error
});

export const SEARCH_PRACTICE_REQUEST = "SEARCH_PRACTICE_REQUEST";
export const searchPracticeRequest = () => ({
  type: SEARCH_PRACTICE_REQUEST
});

export const SEARCH_PRACTICE_SUCCESS = "SEARCH_PRACTICE_SUCCESS";
export const searchPracticeSuccess = practice => ({
  type: SEARCH_PRACTICE_SUCCESS,
  practice
});

export const SEARCH_PRACTICE_ERROR = "SEARCH_PRACTICE_ERROR";
export const searchPracticeError = error => ({
  type: SEARCH_PRACTICE_ERROR,
  error
});

export const searchPractice = practice => dispatch => {
  // dispatch(searchPracticeRequest())
  doctorData(practice)
    .then(info => {
      console.log(info, "this is my action search practice info");
      dispatch(searchPracticeSuccess(info));
    })
    .catch(error => searchPracticeError(error));
};

export const searchLocation = location => dispatch => {
  locationData(location)
    .then(info => {
      console.log(
        info.results[0].geometry.location,
        "this is my action search LOCATION info"
      );
      dispatch(searchPracticeSuccess(info)); //This is the Problem..
    })
    .catch(error => searchPracticeError(error));
};

/////////////////// My experiment!!

// export const searchPractice = practice => dispatch => {
//
//       dispatch(PracSearc(practice));
//
// };
//
// export const searchLocation = location => dispatch => {
//   locationData(location)
//     .then(info => {
//       console.log(
//         info.results[0].geometry.location,
//         "this is my action search LOCATION info"
//       );
//       dispatch(PracSearc(info)); //This is the Problem..
//     })
//     .catch(error => searchPracticeError(error));
// };
//
//
//
//
// const PracSearc = (search, locResults) => dispatch => {
//   doctorData(search, locResults)
//     .then(info => {
//       console.log(info, "lets see if this miracle worked");
//       dispatch(searchPracticeSuccess(info));
//     })
//     .catch(error => searchPracticeError(error));
// };
