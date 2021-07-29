const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();


export const verifyVendorRole = functions.https.onCall((data, context) =>{
    if(!context.auth.token.vendor){
        return{
            error: "Request not authorized. User must be a vendor to fulfill request."
        };
    } 
    const email = data.email;
    return grantVendorRole(email)
    .then(() => {
        return{
            result: `Request fulfilled! ${email} is signed in as a vendor.`
        }
    })
});

async function grantVendorRole(email){
    const user = await admin.auth().getUserByEmail(email);
    if(user.customClaims && user.customClaims.vendor === true){
        return;
    }
    return admin.auth().setCustomUserClaims(user.uid, {
        vendor: true
    });
}