import React from 'react';

export const editorColumn: React.CSSProperties = {
  position: 'relative',
};

export const editorColumnContent: React.CSSProperties = {
  position: 'relative',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: '0px',
  margin: '0px',
  overflowY: 'visible',
  overflowX: 'auto',
  height: '100%'
};

export const textarea: React.CSSProperties = {
  position: 'absolute',
  padding: '0px',
  display: 'inline-block',
  background: 'none',
  textDecoration: 'none',
  whiteSpace: 'pre',
  resize: 'none',
  color: 'inherit',
  overflow: 'scroll',
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextFillColor: 'transparent',
  top: 0,
  left: 0,
  opacity: 0.8,
};

export const editor: React.CSSProperties = {
  position: 'absolute',
  outline: 0,
  top: 0,
  margin: 0,
  border: 0,
  background: 'none',
  boxSizing: 'inherit',
  display: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontVariantLigatures: 'inherit',
  fontWeight: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: 'inherit',
  tabSize: 'inherit',
  textIndent: 'inherit',
  textRendering: 'inherit',
  textTransform: 'inherit',
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
};

export const sequence: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
};

