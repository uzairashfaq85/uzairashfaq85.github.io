export const formatFileSizeDisplay = value => {
  // handle missing or non-numeric values gracefully
  if (value === null || value === undefined || isNaN(value)) {
    return "";
  }
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};
