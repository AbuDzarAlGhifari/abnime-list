const getDurationInMinutes = (duration) => {
  if (!duration) return null;

  const match = duration.match(/(\d+)\s*min/);
  return match ? parseInt(match[1], 10) : null;
};

export default getDurationInMinutes;
