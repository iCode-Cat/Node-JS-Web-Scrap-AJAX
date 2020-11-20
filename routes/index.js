const express = require("express");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const $ = require("cheerio");
const router = express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}))
router.use(express.json())

let team = "";
let player = ""
let array = [];

router.get("/", (req, res) => {
    res.render("index")

})


router.post("/", (req, res) => {
    
    team = req.body.team
    res.redirect("/")
})
router.get("/json", async (req, res) => {
    array.length = 0;
    const url = `https://www.footyrenders.com/page/${1}/?s=${team}`;
    rp(encodeURI(url))
    .then(function(html){
      
      //success!
      console.log($('main > div > article > ul > li > div > a > img', html)[0].attribs['data-src'])

      for (let i = 0; i < 20; i++) {
        player = $('main > div > article > ul > li > div > a > img', html)[i].attribs['data-src'];
        array.push(player)
      }
      console.log(array);
      res.json(array)
    })
    .catch(function(err){
        res.json(array)
    });
    
   
})

module.exports = router;