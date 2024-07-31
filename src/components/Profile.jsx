import userContext from "../context/userContext";
import { useContext } from "react";
const Profile = () => {
  const { user } = useContext(userContext);
  return <div>My name is : {user}</div>;
};

export default Profile;
