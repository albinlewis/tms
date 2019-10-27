let settings = require('../../settings');
const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {
  console.log('In sendmail');
    if (req.body.mailContent && req.body.mailSubject && req.body.mailReceiver) {

      let testAccount = await nodemailer.createTestAccount();
        let smtpConnection = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
          }
        });
        let mailOptions = {
            from: 'albingeraud@gmail.com',
            to: req.body.mailReceiver,
            subject: req.body.mailSubject,
            html: req.body.mailContent
        };
        if (req.body.cclist) {
            mailOptions.cc = req.body.cclist;
        }

        smtpConnection.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log('Error during mail transfer:\n' + err);
                res.status(400).send({
                    status: "failure",
                    mail: mailOptions
                });
            } else {
                console.log('Mail was sent successfully:\n' + info);
                res.status(200).send({
                    status: "success",
                    mail: mailOptions
                });
            }
        });
    } else {
        res.status(400).send({
            status: "invalid request syntax"
        });
    }
}
