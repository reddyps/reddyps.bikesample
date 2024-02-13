function test() {
//        toast("test")
        alert("Hello! I am an alert box!!");
        var result;
        try{
        PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        	sdk.methodName(attributes).then((res) => {
        		console.log("Data " + res);
        		alert(res);
        		return res;
        	}).catch((err) => {
        	     alert(err);
        		console.log("Error " + err);
        		return err;
        	})
        })
        }
        catch(err){
        console.log("Error " + err);
        alert("error" +err);
        }
      }