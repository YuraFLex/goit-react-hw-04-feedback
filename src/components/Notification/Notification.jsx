import React from "react";
import PropTypes from "prop-types";
import { BsEmojiFrown } from "react-icons/bs";
import { NotificationTitle, Icon } from "./Notification.styled";

const Notification = ({ message }) => {
  return (
    <NotificationTitle>
      {message}{" "}
      <Icon>
        <BsEmojiFrown />
      </Icon>
    </NotificationTitle>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
