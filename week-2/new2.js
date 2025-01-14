function logResonseBody(jsonBody){
    console.log(jsonBody);
}


function callbackFn(result) {
    result.json().then(logResonseBody)             // returrns promis then extract
}

var sendObj = {
    method: "GET"

};

fetch("http://localost:3000/handleSum?counter=10", sendObj).then(callbackFn)