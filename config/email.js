var nodemailer = require('nodemailer');

this.transport = nodemailer.createTransport({
    //service: 'Gmail',
    host: "thsr1.supercp.com",
    secure: true,
    port: 465,
    auth: {
      user: "projects@madtec.es",
      pass: "pass"
    }
  });

this.mailOptions = function (name, email, company, project_type, budget, timeframe, details, files) {
  var mailOpts = {
      from: company + ' <' + email + '>' ,
      to: 'projects@madtec.es',
      //replace it with id you want to send multiple must be separated by ,(comma)
      subject: project_type,
      //generateTextFromHTML: true,
      text: "From: "+ name + "\n" +
	    "Company: "+ company + "\n" +
	    "Email: "+ email + "\n" +
	    "Project: "+ project_type + "\n" +
	    "Budget: "+ budget + "\n" +
	    "Timeframe: "+ timeframe + "\n" +
	    "Details: \n\n"+ details,
      html: "<p><b>From: </b>" + name + 
	    "</p> <p><b>Company: </b>"+ company +
	    "</p> <p><b>Email: </b>"+ email +
	    "</p> <p><b>Project: </b>"+ project_type +
	    "</p> <p><b>Budget: </b>"+ budget +
	    "</p> <p><b>Timeframe: </b>"+ timeframe +
	    "</p> <h4>Details: </h4><p>"+ details + "</p>",
      attachments: files
  }
    return mailOpts;
};
