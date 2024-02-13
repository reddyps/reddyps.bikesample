function test() {
        console.log("Grant token data received = ");
        try{
        console.log("build is going on");
        PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        	sdk.fetchAuthToken().then((res) => {
        		console.log("Grant token data received = " + res);
        		alert(res);
        		return res;
        	}).catch((err) => {
        		console.log("Error occurred while fetching the grant token: " + err);
        		alert(err);
        		return err;
        	})
        });
        }
        catch(err){
        console.log("script error " + err);
        }
        console.log("end ends");
      }