module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  
  format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

  // handlebars log
  logger: (something) => {
    console.log(something)
  }


};