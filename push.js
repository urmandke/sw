var push = require('web-push')

let vapidKeys = {
    publicKey: 'BMuXcTF1dKMkPNwGzbXESXgRYQ-0c3o3RONlysbXAWygXNA_wJSL31nrnP00D1m1LhPLjlX67Xq9El8DKL2T0XM',
    privateKey: 'r1o129oA-R2AQxT8oFgEYSUFExCmAK9b9wPp6RRKk2Q'
}

push.setVapidDetails('mailto:test@coder.co.uk',vapidKeys.publicKey,vapid.privateKey)

let sub = {};

push.sendNotification(sub, 'Test Message') 