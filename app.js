const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")


const app = express();

var items =  ["PLay guitar", "Buy Piano", "Buy Amp"];
let workItems = []

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.set("view engine", "ejs")

app.get("/", function(req, res){
   

    // switch (currentDay) {
    //     case 0:

    //         day ="Sunday"
    //         break;
    //         case 1:

    //         day ="Monday"
    //         break;
    //         case 2:

    //         day ="Tuesday"
    //         break;

    //         case 3:

    //         day ="Wednesday"
    //         break;

    //         case 4:

    //         day ="Thursday"
    //         break;

    //         case 5:

    //         day ="Friday"
    //         break;

    //         case 6:

    //         day ="Saturday"
    //         break;

    
    //     default:
    //         console.log("Error")
    //         break;
    // }

    let day = date.getDate()


    res.render("list", {listTitle: day, newListItems: items})
})


app.post("/", function(req,res){


    var item = req.body.newItem



    if(req.body.list==="Work"){

        workItems.push(item)
        res.redirect("/work")

    }else{

        items.push(item)
        res.redirect("/")


    }

    




})


app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItems:workItems })
})




app.post("/work", function(req, res){

    let item = req.body.newItem;
    workItems.push(item)

    res.redirect("/work")

})


app.get("/about", function(req, res){
    res.render("about")
})

app.listen(3000, function(){
    console.log("Server running on port 3000")
})

