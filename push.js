var push = require('web-push')

let vapidKeys = {
    publicKey: 'BMuXcTF1dKMkPNwGzbXESXgRYQ-0c3o3RONlysbXAWygXNA_wJSL31nrnP00D1m1LhPLjlX67Xq9El8DKL2T0XM',
    privateKey: 'r1o129oA-R2AQxT8oFgEYSUFExCmAK9b9wPp6RRKk2Q'
}

push.setVapidDetails('mailto:test@coder.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d4G114_4yhY:APA91bFEWrjje0pkmtBoCORXAf6V8tMueQ699_qkBxvMuoSAVSaM_03wpK6-mYjCiHj72eSkSyPbwvcSBuXkY0E4d5RBQk08QJirkUDSBs0_ree8XkplqP_p_ViwfuP6DDAueK-E3K1f","expirationTime":null,"keys":{"p256dh":"BND_QELGCB812ItWlmrxyUMAK-ep80SACbBSi2bSFkXzktBxTMoUYymN7ENOKXDXiRh9uVoMkDQyOz4FkuudIWA","auth":"IetKfPSxyAbbdlZm-J4eOA"}};

push.sendNotification(sub, 'Test Message') 