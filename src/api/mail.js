let settings = require('../../settings');
const nodemailer = require('nodemailer');

exports.sendMail = (req, res) => {
    if (req.body.mailContent && req.body.mailSubject && req.body.mailReceiver) {
        let smtpConnection = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mailservice.tms@gmail.com',
                pass: 'tmsmailer'
            }
        });
        let mailOptions = {
            from: 'mailservice.tms@gmail.com',
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
