function test() {
//        toast("test")
//        alert("Hello! I am an alert box!!");
        console.log("Grant token data received = ");
        try{
        PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        	sdk.fetchAuthToken().then((res) => {
        		console.log("Grant token data received = " + res);
        		alert(res);
        	}).catch((err) => {
        		console.log("Error occurred while fetching the grant token: " + err);
        		alert(err);
        	})
        });
        }
        catch(err){
        console.log("script error " + err);
        }
        console.log("end ends");
      }