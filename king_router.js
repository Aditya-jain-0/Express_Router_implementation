const express = require('express')

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("<a href = \"king/about\">king_About</a><br/><a href = \"king/contact\">king_Contact</a><br/><a href = \"/\">back</a>")
})

router.get('/about',(req,res)=>{
    res.send("<p>RESPONSE THRU ROUTER ON KING ABOUT</p><br/><a href = \"/king\">back</a>")
})

router.get('/contact',(req,res)=>{
    res.send("<p>RESPONSE THRU ROUTER ON KING CONTACT</p><br/><a href = \"/king\">back</a>")
})

module.exports = router