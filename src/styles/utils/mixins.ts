// Layouts comuns
export const containerMixin = (
  maxWidth: string = "1200px",
  margin: string = "0 auto"
) => `
  max-width: ${maxWidth};
  margin: ${margin};
  padding: 0 15px;
  width: 100%;
`;

// Display Flex
export const flexMixin = (
  justifyContent: string = "center",
  alignItems: string = "center"
) => `
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;
