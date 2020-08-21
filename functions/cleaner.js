const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST);

exports.handler = function(event, context, callback) {
    console.log(event);
    client.transmissions
    .send({
        content: {
            from: 'cleaningSchedule@beyondthunderdome.keepittight.me',
            subject: 'Cleaning!',
            html:
                "<html><body><p>Bill cleans nothing!</p></body></html>"
        },
        recipients: [{ address: 'manbil03@gmail.com' }]
    })
    .then(data => {
        callback(null, {
            statusCode: 200,
            body: `So far so good`
        })
    })
}