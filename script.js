function test() {
        console.log("front click");
        PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then((sdk) => {
        	sdk.methodName(attributes).then((res) => {
        		console.log("Data " + res)
        		alert(res)
        		return res;
        	}).catch((err) => {
        		console.log("Error " + err)
        		alert(err)
        		return err;
        	})
        })
       return "Data from js";
      }