import React from "react";
import PropTypes from 'prop-types';
import { MessageStyle } from "./Notification.styled";

function Notification({ message }) {
    return (
        <MessageStyle>{message}</MessageStyle>
    );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};