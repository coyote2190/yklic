import React, { PropsWithChildren } from 'react';

import { StyledGenericContainer } from './StyledGenericContainer';

const GenericContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledGenericContainer className="main-wrapper">{children}</StyledGenericContainer>
);

export default GenericContainer;
