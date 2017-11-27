var sg = require('sendgrid')

module.exports = function(context, callback) {
    var mail = sg(context.secrets.SENDGRID_KEY),
        body = context.body

    if (!body || !body.name || !body.from || !body.message)
        return callback('missing required field')

    var request = mail.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: 'flamobistro@gmail.com'
                        }
                    ],
                    subject: 'Customer message from ' + body.name
                }
            ],
            from: {
                email: body.from
            },
            content: [
                {
                    type: 'text/plain',
                    value: body.message
                }
            ]
        }
    })

    mail.API(request, function (error) {
        if (error)
            callback('unable to perform API call to SendGrid')
        else
            callback()
    })
}