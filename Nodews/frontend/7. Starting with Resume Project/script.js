// var scrollInterval = setInterval(function() {
//     window.scrollBy(0,50);
//     },  50);


    const http = require('http');
    const port = 8000;
    // localhost   or 127.0.0.1 if continuously running then kill the server by ctrl+C
    // Whenever you write www.google.com in browser it send request to port:8000
    // Any software which is running on your system is basically run on port just like uniquely defined id to a particular employee 
    // one port usually running one s/w at a time
    
    // To read index.html
    const fs = require('fs');
    // Create a request handler function
    function requestHandler(req, res){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'});
    
        // put some switching cases
        let filePath;
        switch(req.url){
            case '/':
                filePath = './index.html'
                break;
            case '/profile':
                filePath = './profile.html'
                break;
            default:
                filePath = './404.html'
                break;    
        }
        fs.readFile(filePath, function(error,data){
            if(error){
                console.log('error',error);
                return res.end('<h1>Error!</h1>')
            }
            return res.end(data);
        })
    
    
        // fs.readFile('./index.html', function(error, data){
        //       if(error){
        //           console.log('error',error);
        //           return res.end('<h1>Error!</h1>'); 
        //       }
        //       return res.end(data);
        // });
        // res.end('<h1>Gotcha!</h1>');
    }
    
    
    // Let's go ahead and run our server
    const server = http.createServer(requestHandler);
    server.listen(port, function(error){
           if(error){
               console.log(error);
               return;
           }
           console.log("Server is running on port: ",port);
    });    