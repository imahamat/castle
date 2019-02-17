const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const fs = require('fs');
const sleep = require('thread-sleep');
const fetch = require('node-fetch');

function Relais_Chateaux() {

request("https://www.relaischateaux.com/fr/site-map/etablissements",
(error, response, html) => {

const $ = cheerio.load(html);
const links = [];

// => Find each links of Restaurant and Hotel From class<countryF> of France
$('#countryF').find("h3:contains('France')").parent().find('.listDiamond > li').each(
function (index, value) {
links.push($(this).find("a").first()[0].attribs.href);
});


// Browse each links and find The Restaurant and The Hôtel if there is one of them
var cpt = 0;
var Hotels = new Object();
links.forEach((url) => {
request( {uri : url}, (error, response, html) => {
const $ = cheerio.load(html);

// Declaration des variables
var Hotel = $('.jsSecondNavMain').find("li").find("a").first().text();

if(Hotel.includes('Hôtel')===true)
{
var  Restaurant = $('.jsSecondNavMain').find("li").next().find("a").first().text();
if (Restaurant.includes('Restaurant')===true)
{
var r_1 = null, price = null, h = null;
if($('.jsSecondNavSub').find("li").first().find("a").text() != '')
{
r_1 = $('.jsSecondNavSub').find("li").first().find("a").text().trim();
}
else if($('.jsSecondNavSub').find("li").next().find("a").text() != '')
{
r_1 = $('.jsSecondNavSub').find("li").next().find("a").text().trim();
}
else
{
r_1 = $('.hotelTabsHeaderTitle').find("h3").text().trim();
}
price = $('.innerHotelHeader').find('.priceTag').find('.tag.tagTall.tagLight').find('.price').text()
h = $('.headings').find("*[itemprop = 'name']").text().trim();

Hotels[h] = r_1;
console.log(h+" : "+price)
}
}
cpt++;
if (cpt ==links.length-1)
{
for(var i in Hotels)
{
//console.log(i + " = " + Hotels[i]);
}
fs.writeFile("./relais-chateaux.json", JSON.stringify(Hotels, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
}
return Hotels; // return hotels and restaurants
// end of request( {uri : url}, ...
})
// end of links.forEach((url) ...
});
// end of request("https://www.relaischateaux.com/fr/site-map/etablissements")
});
//end function relai_chateaux
}



// ******** Main ********** //
Relai_Chateaux()
