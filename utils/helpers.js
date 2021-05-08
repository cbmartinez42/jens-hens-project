module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
      },

      // handlebars log
      logger: (something) => {
        console.log(something)
      }

      // Handlebars.registerHelper("log", function(something) {
      //   console.log(something);
      // });
};