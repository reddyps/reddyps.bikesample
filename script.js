 function fetchAuthToken() {
        console.log("start");
       var result="";
       try{
       let sdk =  PhonePe.PhonePe.build(PhonePe.Constants.Species.web);
       console.log('[PHONEPE] SDK INIT DONE');
       result =   sdk.fetchAuthToken();
       console.log("Grant token data received = " + JSON.stringify(result));
       result = JSON.stringify(result);
        }
        catch(err){
        console.log("script error " + err);
        }
        console.log("result :"+result);
        console.log("End");
        return result;
      }