import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Wrapper, ButtonStyled } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <Wrapper>
        {options.map(option => {
          return (
            <Fragment key={option}>
              <ButtonStyled
                type="button"
                name={option}
                onClick={onLeaveFeedback}
              >
                {option}
              </ButtonStyled>
            </Fragment>
          );
        })}
      </Wrapper>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

