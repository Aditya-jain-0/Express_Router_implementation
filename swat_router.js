const express = require('express')

const router = express.Router();

router.get('/',(req,res)=>{
    res.send(
        "<a href = \"swat/about\">Swat_About</a><br/><a href = \"swat/contact\">Swat_Contact</a><br/><a href = \"/\">back</a>"
    )
})

router.get('/about',(req,res)=>{
    res.send("<p>RESPONSE THRU ROUTER ON SWAT ABOUT</p><br/><a href = \"/swat\">back</a>")
})

router.get('/contact',(req,res)=>{
    res.send("<p>RESPONSE THRU ROUTER ON SWAT CONTACT</p><br/><a href = \"/swat\">back</a>")
})

module.exports = router