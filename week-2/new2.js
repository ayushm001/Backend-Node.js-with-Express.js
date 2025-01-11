function logResonseBody(jsonBody){
    console.log(jsonBody);
}


function callbackFn(result) {
    result.json().then(logResonseBody)
}

var sendObj = {
    method: "GET"

};

fetch("http://localost:3000/handleSum", sendObj).then(callbackFn)