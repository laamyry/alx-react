import proptypes from "prop-types";
export default proptypes.shape({
  id: proptypes.number.isRequired,
  name: proptypes.string.isRequired,
  credit: proptypes.number.isRequired,
});
