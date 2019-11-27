import PropTypes from "prop-types";
import React from "react";
import { ButtonContentStyled, ButtonStyled } from "./styles";
function Button({ text, loading }) {
  return (
    <ButtonContentStyled>
      <ButtonStyled loading={loading}>
        {loading ? (
          <svg
            version="1.1"
            id="L4"
            xmlns="http://www.w3.org/2000/svg"
            x="10px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
          >
            <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"
              ></animate>
            </circle>
            <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.2"
              ></animate>
            </circle>
            <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.3"
              ></animate>
            </circle>
          </svg>
        ) : (
          text
        )}
      </ButtonStyled>
    </ButtonContentStyled>
  );
}

Button.defaultProps = {
  loading: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

export default Button;
