import { useSelector } from "react-redux";

const DebugComponent = () => {
  const storeState = useSelector((state) => state);
  console.log("Logs the entire Redux store state", storeState); // Logs the entire Redux store state
  return null;
};

export default DebugComponent;
