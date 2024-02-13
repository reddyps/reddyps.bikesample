var PhonePe= async function fetchAuthToken() {
        console.log("start");
        var result=null;
        try{
       let sdk = await PhonePe.PhonePe.build(PhonePe.Constants.Species.web);
       console.log('[PHONEPE] SDK INIT DONE');
       result = await  sdk.fetchAuthToken();
       console.log("Grant token data received = " + JSON.stringify(result));
       result = JSON.stringify(result);
        }
        catch(err){
        console.log("script error " + err);
        }
        finally{
        console.log("result :"+result);
        console.log("End");
        return result;
        }
      }