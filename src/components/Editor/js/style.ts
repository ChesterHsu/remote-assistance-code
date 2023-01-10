import React from 'react';

export const column: React.CSSProperties = {
  position: 'relative',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: '0px',
  margin: '0px',
  overflow: 'auto',
};

export const columnScroll: React.CSSProperties = {
  position: 'fixed'
}

export const textarea: React.CSSProperties = {
  display: 'inline-block',
  background: 'none',
  textDecoration: 'none',
  whiteSpace: 'pre',
  resize: 'none',
  color: 'inherit',
  overflow: 'hidden',
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextFillColor: 'transparent',
  opacity: 0.8,
  height: '100%'
};

export const editor: React.CSSProperties = {
  position: 'absolute',
  outline: 0,
  top: 0,
  left: 0,
  margin: 0,
  border: 0,
  padding: 0,
  background: 'none',
  boxSizing: 'inherit',
  display: 'inherit',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
};

export const sequence: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
};

