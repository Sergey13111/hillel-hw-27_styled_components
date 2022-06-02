import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledPrimaryButton = styled.button`
  min-width: 35px;
  background: #605DEC;
  border: none;
  color: #FAFAFA;
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "9px 16px";
      case "large":
        return "11px 20px";
      default:
        return "13px 20px";
    };
  }};
  font-size: ${(props) => props.size==="large" ? "18px" : "16px"};
  font-weight: 400;
  line-height: 22px;
  border-radius: 4px;
  margin:10px;

  &:disabled {
    background: rgba(203, 212, 230, 0.3);
    border: 1px solid #7C8DB0;
    color: #7C8DB0;
  };

  &:hover {
    background: #1513A0;
    cursor:pointer;
  };
`;

const StyledSecondaryButton = styled(StyledPrimaryButton)`
  background: none;
  border: 1px solid #605DEC;
  color: #605DEC;

  &:disabled {
    border: 1px solid #7C8DB0;
    color: #7C8DB0;
  };

  &:hover {
    background: #E9E8FC;
  };
`;

const Button = ({ children, color, size, disabled }) => {
  if (color === "secondary") {
    return <StyledSecondaryButton color={color} size={size} disabled={disabled}>{children}</StyledSecondaryButton>;
  } 
  return <StyledPrimaryButton color={color} size={size} disabled={disabled}>{children}</StyledPrimaryButton>;
};

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(["secondary", "primary"]),
  size: PropTypes.oneOf(["large", "small", "medium"]),
  disabled: PropTypes.bool,
}

export default Button;



