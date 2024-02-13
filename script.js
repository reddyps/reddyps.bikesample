async function fetchAuthToken() {
        console.log("start");
        var result="";
        try{
       let sdk = await PhonePe.PhonePe.build(PhonePe.Constants.Species.web);
       console.log('[PHONEPE] SDK INIT DONE');
       result = await  sdk.fetchAuthToken();
       console.log("Grant token data received = " + JSON.stringify(res));
//       .then((res) => {
//               		console.log("Grant token data received = " + JSON.stringify(res));
//               		result=JSON.stringify(res);
//               	}).catch((err) => {
//               		console.log("Error occurred while fetching the grant token: " + err);
//               		result= err;
//               	});
       /*await PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {

        });*/
        }
        catch(err){
        console.log("script error " + err);
        }
        console.log("result :"+result);
        console.log("End");
        return result;
      }