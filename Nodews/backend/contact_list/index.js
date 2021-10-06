const express =require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Middleware
app.use(express.urlencoded());
// middleware will help to find out folder assets then assets will have multiple folders for css, javascript, images or probably fonts too
app.use(express.static('assets'));

// middleware2
// app.use(function(req, res, next ){
//     req.myName = "Ankita";
//     // console.log('middleware 2 called');
//     next();
// });

// middleware1
// app.use(function(req, res, next ){
//     console.log('My Name from MW2', req.myName);
//     // console.log('middleware 1 called');
//     next();
// });

var contactList = [
    {
        name: "Ankita",
        phone: "1234567892"
    },
    {
        name: "Sumit",
        phone: "1111111111"
    },
    {
        name: "Tara",
        phone: "2345678911"
    }
]

// '/' represent route and function(req,res) is the controller function
app.get('/', function(req, res){
    // console.log(__dirname );
    // console.log(req);
    // res.send('<h1>Cool, it is running! or is it?</h1>')

// Fetch the contact
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home',{ 
            title:"Contact List",
            contact_list: contacts
        });

    });

    // console.log('From the get route controller',req.myName);
    // return res.render('home',{ 
    //     title:"Contact List",
    //     contact_list: contactList
    // });
});

app.get('/practice', function(req, res){
    
    return res.render('practice',{ 
        title:"Playing With EJS"
    });
});

// Controller
app.post('/create-contact', function(req,res){
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
   
    // Either
    // contactList.push({
    //      name: req.body.name,
    //      phone: req.body.phone

    // });
    // or
    // contactList.push(req.body);
   
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log('error in creating a contact!');
            return;
         }
         console.log('**********', newContact);
         return res.redirect('back');
    });
     // return res.redirect('back');
    // return res.redirect('/'); 
    // return res.redirect('/practice');
});

// app.get('/delete-contact/:phone', function(req,res){
app.get('/delete-contact/', function(req,res){
    // console.log(req.params);
    // console.log(req.query);
    // let phone = req.params.phone;

    // Get the query from the url
    // let phone = req.query.phone;

    // Get the id from the url
    let id = req.query.id;

    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    
    // console.log("Contact Index",contactIndex);
    
    // if ( contactIndex != -1){
    //     contactList.splice(contactIndex, 1);
    // }

    // find the contact in the database using id and delete
    Contact.findByIdAndDelete(id, function(err){
            if(err){
                console.log('error in deleting an object from database');
                return;
            }

            return res.redirect('back');
    });


    // return res.redirect('back');
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Yup! My Express Server is running on Port:', port);
});
