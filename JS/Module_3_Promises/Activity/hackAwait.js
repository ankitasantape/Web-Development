'use strict';
const loginLink = "https://www.hackerrank.com/auth/login";
const  { answers } = require("./codes");
const puppeteer = require("puppeteer")
// creates headless browser
let browserStartPromise = puppeteer.launch({
    // visible 
    headless: false,
    // type 1sec // slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});

(async function fn() {
    try {
        let page, browser;
        let browserObj = await browserStartPromise;
        console.log("Browser opened");
        browser = browserObj
        // new tab 
        page = await browserObj.newPage();
        await page.goto(loginLink);
        await page.type("input[name='username']", "fonovi2319@mom2kid.com", { delay: 50 });
        await page.type("input[type='password']", "Anaconda", { delay: 50 });
        await page.click('button[data-analytics="LoginPassword"]', { delay: 100 });
        await waitAndClick(".track-card a[data-attr2='algorithms']", page);
        await waitAndClick("input[value='warmup']", page);
        let questionsArr = await page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
        let currPageUrl = page;  
        console.log(questionsArr.length);  
        for (let i = 1; i < questionsArr.length; i++) {
            await questionSolver(currPageUrl, questionsArr[i], answers[i]);
            console.log("Question " + i + " Solved!"); 
        }
    } catch (err) {
        console.log(err);
    }

})();


async function waitAndClick(selector, cpage) {
    try {
       await cpage.waitForSelector(selector, { visible: true });
       await cpage.click(selector);
       console.log("done");
    } catch (err) {
        // console.log(err);
        return new Error(err);
    }
}


async function questionSolver(page, question, answer) {
     await question.click();
     await waitAndClick(".monaco-editor.no-user-select.vs", page);
     await waitAndClick(".checkbox-input", page);
     await page.waitForSelector("textarea.custominput", { visible: true });
     await page.type("textarea.custominput", answer);
     await page.keyboard.down("Control");
     await page.keyboard.press("A"); 
     await page.keyboard.press("X");
     await page.keyboard.up("Control");
     await waitAndClick(".monaco-editor.no-user-select.vs", page);
     await  page.keyboard.down("Control");
     await page.keyboard.press("A"); 
     await page.keyboard.press("V");
     await page.keyboard.up("Control");
     await page.click(".hr-monaco__run-code");
     await page.click(".hr-monaco-submit");
}  

function consoleFn(selector, qName) {
    let qNamesElem = document.querySelectorAll(selector);
    for (let i = 0; i < qNamesElem.length; i++) {
        let cName = qNamesElem[i].innerText.split("\n")[0];
        if (cName == qName) {
            console.log(cName);
            return qNamesElem[i].click();

        }
    }
}





