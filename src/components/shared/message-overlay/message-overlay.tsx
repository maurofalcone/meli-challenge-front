import React from 'react';
import css from './message-overlay.module.scss';
import { MessageOverlayProps } from './types';

const MessageOverlay: React.FC<MessageOverlayProps> = ({ message }) => <div className={css.message}>{message}</div>

export default MessageOverlay;