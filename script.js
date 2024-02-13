async function fetchAuthToken() {
        console.log("start");
        var result="";
        try{
       await PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        	sdk.fetchAuthToken().then((res) => {
        		console.log("Grant token data received = " + JSON.stringify(res));
        		result=JSON.stringify(res);
        	}).catch((err) => {
        		console.log("Error occurred while fetching the grant token: " + err);
        		result= err;
        	})
        });
        }
        catch(err){
        console.log("script error " + err);
        }
        console.log("result :"+result);
        console.log("End");
      }