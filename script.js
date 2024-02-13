function fetchAuthToken() {
        console.log("start");
        try{
        PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        	sdk.fetchAuthToken().then((res) => {
        		console.log("Grant token data received = " + JSON.stringify(res));
        		return JSON.stringify(res);
        	}).catch((err) => {
        		console.log("Error occurred while fetching the grant token: " + err);
        		return err;
        	})
        });
        }
        catch(err){
        console.log("script error " + err);
        }
        console.log("End");
      }