
//if else func to identifying the browser
let browserName;
let launchBrowser = (browserName) => {
if(browserName==="Chrome")
    console.log("Launched browser is Chrome")
else
    console.log("Launched browser is not Chrome")   
}

//Switch case for identiyfing the testtype
let runTests = (testType) => {

    switch (testType) {
        case 'smoke':
            console.log("The test type is 'Smoke'")
            break;
        case 'sanity':
            console.log("The test type is 'sanity'")
            break;
        case 'regression':
                console.log("The test type is 'regression'")
                break;
        default:
            console.log("The test type is defaulted to 'Smoke'")
            break;
    }

}

launchBrowser("Edge");
runTests("sanity");