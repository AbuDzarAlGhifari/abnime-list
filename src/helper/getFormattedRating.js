const getFormattedRating = (rating) => {
  switch (rating) {
    case 'R - 17+ (violence & profanity)':
      return 'R-17+';
    case 'PG-13 - Teens 13 or older':
      return 'PG-13';
    case 'G - All Ages':
      return 'G - All Ages';
    case 'PG - Children':
      return 'PG - Children';
    case 'PG-13':
      return 'PG-13';
    case 'R':
      return 'R';
    case 'R+ - Mild Nudity':
      return 'R+ - Mild Nudity';
    case 'Unrated':
      return 'Unrated';
    default:
      return rating || 'N/A';
  }
};

export default getFormattedRating;
