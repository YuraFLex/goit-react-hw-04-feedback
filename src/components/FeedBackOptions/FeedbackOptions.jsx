import React from "react";
import PropTypes from "prop-types";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import {
  FeedBackBoard,
  Title,
  FeedBackList,
  Button,
} from "./FeedbackOptions.styled";

const FeedBack = ({ title, btnName, onLeaveFeedback }) => {
  return (
    <FeedBackBoard>
      {title ? <Title>{title}</Title> : null}
      <FeedBackList>
        {btnName.map((btn, index) => {
          return (
            <li key={index}>
              <Button
                type="button"
                name={btn}
                onClick={onLeaveFeedback}
                icon={BsEmojiSmileUpsideDown}
              >
                {btn}
              </Button>
            </li>
          );
        })}
      </FeedBackList>
    </FeedBackBoard>
  );
};

FeedBack.propTypes = {
  title: PropTypes.string,
  onLeaveFeedback: PropTypes.func.isRequired,
  btnName: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedBack;
