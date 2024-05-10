import { pinwheel } from "ldrs";
pinwheel.register();

const Loader = () => {
  return <l-pinwheel stroke={3} speed={1.2} size={150} color="white" />;
};
export default Loader;
