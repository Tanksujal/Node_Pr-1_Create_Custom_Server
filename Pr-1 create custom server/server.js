const http = require("http")
const fs = require("fs")
http.createServer((req,res)=>{
    let filename = ""
    console.log(req.url);
    switch(req.url){
        case '/' : 
            filename = "pages/home.html"
            break;
            case '/about' : 
            filename = "pages/about.html"
            break;
            case '/contact' : 
            filename = "pages/contact.html"
            break;
            case '/product' : 
            filename = "pages/product.html"
            break;
            default : 
            filename = "pages/404.html"
    }
    fs.readFile(filename,(err,data)=>{
        if(err){
            console.log(err);
            return false
        }
        res.end(data)
    })
}).listen(8000)