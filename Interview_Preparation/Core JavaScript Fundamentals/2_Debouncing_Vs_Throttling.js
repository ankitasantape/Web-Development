// Debouncing And Throttling
// Some of the interviewer directly asked you,
// What is Debouncing ?
// What is Throttling ?
// What is the difference between decouncing and throttling ?
// Or they can ask you in which scenario you would prefer throlling over debouncing. 
// Why you are using debouncing over throttling ?
// And some of the interviewer don't directly ask you, they create a scenario where this concept would be used.
// This concepts generally used in performance optimization, rate limiting of certain function calls or function calls.
/*
So, debouncing and throttling both are the concepts used for the performance optimization of a webapp.
And how do we do that, it happens by limiting the rate of the function calls or limiting the rate of the execution of a perticular function
that function call could be anything, going and fetching a data from an API or could be logging on a logger
Sometimes are function is calls a lot of time, we attach a function to an event listener then it is just calling repeatedly or unnecessarily
so we could limit the rate of that execution and optimize the performance of a webapp.
So that is what we do using debouncing and throttling.

Eg. Generally, we have a search bar in e-commerce website.
Suppose we are searching for products like Samsung Note Phone in that searching bar
So, While we are typing single word char by char it gives us a suggestion for every char, (meanwhile it gives search related queries, sony, samsung, smartwatch, etc. or anything which is starting from s)
How developer generally develop this search related queries 
Suppose we have getResults() API or something like that
What will this getResults() method will do ?
This getResults() method goes to the network and makes an API() call and gets back the data on the UI and user just render on the UI and we attach this with "keypress" event.
On each and every "Keypress", getResults() API call is made, generally developers do like that.
But what is the cons in that ?
Suppose on each and every keypress event we trigger this API call, gets result.
So, what will happen in this scenario is that as in 
we typing.... 'S' 'A' 'M' 'S' 'U' 'N' 'G' ' ' 'N' 'O' 'T' 'E' .... this word and this word has 10 chars + 1 space so this are 11 strokes event so on each and every keystroke event
if we fire this getResults() API that means after this query is searched we would have made this 11 API calls that is a lot.
Suppose think of it, millions of users on this website and searching on this website for something then they would be making billions of calls on this and that is not performing good.
So we could have optimize the UX as well that could be a better user experience.
So instead of making this API calls on each and every keypress event we could limit the rate of this API calls.

So, How can we limit this API calls ?
=> We can do this by 2 ways:
   Debouncing: The keypress event is happing after each and every keystroke event, there would be a lot of keypress events while we are typing "Samsung Note" but only make an API call if the difference between the two keypress event is greater than the certain limit.
   If the difference between two keystroke event is greater that 300 miliseconds then only make an API call and get us the result. 
   It means that we typed Samsung and then gave some pause if pause is greater that 300 miliseconds at that time API will make a call and will give us a result related to Sam and then the keywords starting from Sam so by doing this we are saving a lot of API calls.
   So, that happens in the case of debouncing calls  
    
   Throttling: It is saying that if there are lots of events are happening like typing "Samsung Note" then in that case so what will happen is, only make the function call after the certain limit of time
   Suppose if you make a function call over here and gets the result all starting from 'S' then wait until a certain period of time like 300ms, so upto 300ms ingnore all this keywords from 'a' to 'g' ('amsung') then after 300ms make a function call.
   Calling an API after a certain interval of time, so if you keep on typing like 'Samsung_note_galaxy' so if after each and every 300ms this function call will be made. This is like throttling each function call.


   =>Debouncing : If the difference between two keystroke event is greater than the centain amount of time then make a function call. 
   =>Throttling : If the difference between last function call and current function call is 300 millisecond then only make a function call.  

    So, what make more sence in e-commerse website debouncing or throttling.
    In amazon's and flipkart's website you will see debouncing is happening. 

    2) Second example of debouncing, 
    So, let's take a scenario, Suppose we want to track the user when the user is resizing our browser continuously.
    How can we trap that scenario ? 
    Developer generally implement this
    document.addEventListener("resize", () {
        
    })  

*/ 