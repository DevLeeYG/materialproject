import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/system';
import { fontStyle, Edam } from '../HMF/HeadSource';
import { keyframes } from '@emotion/react';

const BtoU = keyframes`
  from {
    opacity: 0;
            transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
            transform: translateZ(0);
  }
`;

const EdamEnt = () => {
  const classes = fontStyle();
  const Ed = Edam();
  return (
    <Box className={classes.root}>
      <Box className={Ed.root}>EDAM</Box>
      <Box className={Ed.root1}>Entertaiment</Box>
    </Box>
  );
};

export default EdamEnt;
