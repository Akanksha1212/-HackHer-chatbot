const express = require('express');
const app = express();
const dfff=require('dialogflow-fulfillment');


var admin = require("firebase-admin");

var serviceAccount = require("./config/testbot-b251a-firebase-adminsdk-7cec4-10a9b4f008.json");

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
     console.log("Connected to db"); 
} catch (error) {
    console.log("error here" + error);
}

var db = admin.firestore();
app.get('/',(req,res)=>{
    res.send("we ae live")
});

app.post('/',express.json(),(req,res)=>{
    const agent = new dfff.WebhookClient({
        request: req,
        response:res
    });
    function demo(agent){
        agent.add("sending response from webhook server");
    }
    function finalConfirmation(agent){
        var name =agent.context.get("awaiting_name").parameters['person'];
        var email = agent.context.get("awaiting_email").parameters.email;

        console.log(name);
        console.log(email);

        agent.add("Great! Your information has been added");

        return db.collection('meeting').add({
           name:name,
           email:email,
           time:Date.now() 
        }).then(ref=>
            console.log("Meeting details to db")
            )
    }
    var intentMap = new Map();
    intentMap.set('finalConfirmation',finalConfirmation)
    intentMap.set('webhookdemo',demo)

    agent.handleRequest(intentMap);
})

app.listen(3333,()=>console.log("Server is live at port 3333"));