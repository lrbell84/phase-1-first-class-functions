function receivesAFunction (callback) {
    callback ();
}

function returnsANamedFunction () {
    return function thisFn() {
        console.log("this is a function");
    };
}

function returnsAnAnonymousFunction (){
    return () => console.log("this is anonymous");
}