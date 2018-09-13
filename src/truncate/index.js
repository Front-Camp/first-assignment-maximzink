/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  if (length == null) {
      length = 100;
    }
    if (replacer == null) {
     replacer = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - replacer.length) + replacer;
    } else {
      return str;
    }
};

export default truncate;
