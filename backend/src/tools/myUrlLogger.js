var num = 0;

const myUrlLogger = (req, res, next) => {
  var method = req.method;
  var url = req.url;

  console.log(++num + '. ' + method + ' ' + url);
  next();
};

export default myUrlLogger;

//  {
//     var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//     var method = req.method;
//     var url = req.url;

//     console.log((++num) + ". IP " + ip + " " + method + " " + url);
//     next();
// };

//----------------------SCRIPTUS----------------------
// class DateNow {

//     toString() {
//         let current_datetime = new Date()
//         let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
//         return formatted_date
//     }

// }

// const myUrlLogger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${new DateNow().toString()}`)

//     next()
// }
