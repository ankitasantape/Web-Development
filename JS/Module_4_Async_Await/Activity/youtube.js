// a. Name of Playlist,view
// b. Total No of videos : 792
// c. actual No of videos :783
// d. Total length of playlist : 12 hours, 9 minutes, 12 seconds
// At 1.25x : 9 hours, 43 minutes, 21 seconds

// At 1.50x : 8 hours, 6 minutes, 8 seconds
// At 1.75x : 6 hours, 56 minutes, 41 seconds
// At 2.00x : 6 hours, 4 minutes, 36 seconds
// Average length of video : 29 minutes, 10 seconds

// e. console.table of video number,name,time



// Current Task : name of playlist ,views,total videos, 

const puppeteer = require("puppeteer");
let page;
(async function fn() {
    let browser = await puppeteer.launch({
        headless: false, defaultViewport: null,
        args: ["--start-maximized"],
    })
    page = await browser.newPage();
    await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
    await page.waitForSelector('h1[id="title"]');
    // first element 
    let element = await page.$('h1[id="title"]');
    let value = await page.evaluate(function cb(element) {
        return element.textContent;
    }, element);
    // all occurences F
    // 21
    console.log("Title", value)
    
    /**** count of videos ****/ 
    let someList = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
    value = await page.evaluate(
        function (element) { return element.textContent }, someList[5]);
    console.log("videos", value)
    /**** count of views ****/
    let videos = value.split(" ")[0].trim();
    value = await page.evaluate(
        function (element) { return element.textContent }, someList[6]);
    // no of views -> playlist   
    console.log("views", value)
    
    // list first 100 videos console.table=>  of video number,name,// time

    // ->
    let loopcount = Math.floor(videos / 100);

    for (let i = 0; i < loopcount; i++) {
        // load start
        await page.click(".circle.style-scope.tp-yt-paper-spinner");
        // load finish
        await waitTillHTMLRendered(page);
        console.log("loaded the new videos");
    }
    // loader -> scroll 
    // video Name
    let videoNameElementList = await page.$$("a[id='video-title']");
    // console.log("videoNameElementList", videoNameElementList.length);
    // last video 
    let lastVideo = videoNameElementList[videoNameElementList.length - 1];
    // last video -> view
    await page.evaluate(function (elem) {
        elem.scrollIntoView();
    }, lastVideo);
    // time 

    let timeList = await page.$$("span[id='text']");
    console.log(timeList.length);

    let videosArr = [];
    for (let i = 0; i < timeList.length; i++) {
        let timeNTitleObj = await page.evaluate(getTimeAndTitle, timeList[i], videoNameElementList[i]);
        videosArr.push(timeNTitleObj);
    }
    console.table(videosArr);

})();
function getTimeAndTitle(element1, element2) {
    return {
        time: element1.textContent.trim(),
        title: element2.textContent.trim()
    }
}


// After every timeout -> it check >  
const waitTillHTMLRendered = async (page, timeout = 10000) => {
    
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    // min check 3 rahenge max check 10 rahenge
    const minStableSizeIterations = 3;

    while (checkCounts++ <= maxChecks) {
        let html = await page.content();
        let currentHTMLSize = html.length;
//      body part =>   
        let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitFor(checkDurationMsecs);
    }
};