const { answers } = require("./code");
// npm i puppeteer;
let puppeteer = require("puppeteer");
// creates headless browser
let browserStartPromise = puppeteer.launch({
    // visible 
    headless: false,
    // type 1sec // slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});
let page, browser;
browserStartPromise
    .then(function (browserObj) {
        console.log("Browser opened");
        // new tab 
        browser = browserObj
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;
    }).then(function (newTab) {
        page = newTab
        console.log("new tab opened ")
        let gPageOpenPromise =
            newTab.goto("https://www.hackerrank.com/auth/login");
        return gPageOpenPromise;
    }).then(function () {
        // page element -> cheerio 
        console.log("Entered email");
        let waitforTypingPromise = page.type("input[name='username']", "fonovi2319@mom2kid.com", { delay: 100 });
        return waitforTypingPromise;
    }).then(function () {
        // page element -> cheerio 
        console.log("Entered password");
        waitforTypingPromise = page.type("input[name='password']", "Anaconda", { delay: 100 });
        return waitforTypingPromise;
    }).then(function () {
        // page element -> cheerio 
        console.log("Signed in successfully!");
        let allLisPromise = page.click("button[data-analytics='LoginPassword']", { delay: 100 });
        return allLisPromise;
    }).then(function () {
        let warmUpPagePromise = waitAndClick("div[data-automation='algorithms']", page);
        return warmUpPagePromise;
    }).then(function () {
        let getToWarmUp = waitAndClick("input[value='warmup']", page);
        return getToWarmUp;
    }).then(function () {
        let waitFor3SecondsPromise = page.waitFor(3000);
        return waitFor3SecondsPromise;
    })
    .then(function () {
        // arr of questions will be return using $$ helps to get list of elements
            let AllChallengesArrPromise =
                page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled"
                    , { delay: 100 });
            return AllChallengesArrPromise;
        }).then(function (questionsArr) {
            // n number of question first 
            console.log("number of questions", questionsArr.length);
            
            let qWillBeSolvedPromise = questionSolver(page, questionsArr[1], answers[1]);
            return qWillBeSolvedPromise;
        }).then(function () {
            console.log("question is solved");
        })

    function waitAndClick(selector) {
        return new Promise(function (resolve, reject){
            let waitForModalPromise = page.waitForSelector(selector, { visible: true});
            waitForModalPromise.then(function () {
                let clickModal = page.click(selector, { delay: 100 });
                return clickModal;
            }).then(function () {
                resolve();
            }).catch(function (err){
                reject(err);
            })
        })
    } 

    function questionSolver(page, question, answer) {
        return new Promise(function (resolve, reject) {
            let qWillBeCLickedPromise = question.click();
            qWillBeCLickedPromise
                //click
                // code type 
                // ctrl A+ ctrl x
                // click on editor 
                // ctrl A+ctrl v
                //  reached to editor
                .then(function () {
                    // focus 
                    let waitFOrEditorToBeInFocus =
                        waitAndClick(".monaco-editor.no-user-select.vs", page);
                    return waitFOrEditorToBeInFocus;
                })
                // click
                .then(function () {
                    return waitAndClick(".checkbox-input", page);
                }).then(function () {
                    return page.waitForSelector("textarea.custominput", { visible: true });
                })
                .then(function () {
                    return page.type("textarea.custominput", answer, { delay: 100 });
                }).then(function () {
                    let ctrlIsPressedP = page.keyboard.down("Control");
                    return ctrlIsPressedP;
                }).then(function () {
                    let AIsPressedP = page.keyboard.press("A", { delay: 100 });
                    return AIsPressedP;
                }).then(function () {
                    return page.keyboard.press("X", { delay: 100 });
                }).then(function () {
                    let ctrlIsPressedP = page.keyboard.up("Control");
                    return ctrlIsPressedP;
                })
                .then(function () {
                    // focus 
                    let waitFOrEditorToBeInFocus =
                        waitAndClick(".monaco-editor.no-user-select.vs", page);
                    return waitFOrEditorToBeInFocus;
                })
                .then(function () {
                    let ctrlIsPressedP = page.keyboard.down("Control");
                    return ctrlIsPressedP;
                }).then(function () {
                    let AIsPressedP = page.keyboard.press("A", { delay: 100 });
                    return AIsPressedP;
                }).then(function () {
                    let AIsPressedP = page.keyboard.press("V", { delay: 100 });
                    return AIsPressedP;
                }).then(function () {
                    let ctrlIsPressedP = page.keyboard.up("Control");
                    return ctrlIsPressedP;
                }).then(function () {
                    return page.click(".hr-monaco__run-code", { delay: 50 });
                })
                .then(function () {
                    resolve();
                }).catch(function (err) {
                    console.log(err)
                    reject(err);
                })
        })
    }