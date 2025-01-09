const getFormattedDate = (dateString) => {
  if (!dateString) return null;

  const [startDate] = dateString.split('to');
  return startDate.trim();
};

export default getFormattedDate;
