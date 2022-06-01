import styled from "styled-components";
import PropTypes from 'prop-types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const StyledAlert = styled.div`
display: flex;
justify-content: space-between;
padding: 16px 32px;
font-weight: 600;
font-size: 18px;
line-height: 25px;
margin: 15px;
color: ${(props) => {
  switch (props.color) {
    case "error":
      return "#FAFAFA";
    case "warning":
      return "#1513A0";
    default:
      return "#F6F6FE";
  };
}};
background: ${(props) => {
  switch (props.color) {
    case "error":
      return "#EB5757";
    case "warning":
      return "#FFD12F";
    default:
      return "#605DEC";
  };
}};
`
const Alert = ({ children, color, onClose }) => {
  return <StyledAlert color={color}>{children}<CloseRoundedIcon cursor="pointer" onClick={onClose} /></StyledAlert>
};

Alert.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(["error", "warning", "primary"]).isRequired,
  onClose: PropTypes.func.isRequired,
}


export default Alert;



