import proptypes from "prop-types";

export default proptypes.shape({
  id: proptypes.number.isRequired,
  html: proptypes.shape({ __html: proptypes.string }),
  type: proptypes.string.isRequired,
  value: proptypes.number,
});
