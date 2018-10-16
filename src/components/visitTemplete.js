import { destroy } from "../models/user";

const DoctorProfile = props => {
  const { doctor } = props;
  return (
    <div>
      <h4>{doctor.name}</h4>
      <button onClick={ev => destroy(doctor.id)}>Delete doctor</button>
    </div>
  );
};
