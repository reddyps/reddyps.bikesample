function test() {
//        toast("test")
        alert("Hello! I am an alert box!!");
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

       alert("sending data");
       return "Data from js";
      }
