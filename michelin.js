const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const fs = require('fs');
const sleep = require('thread-sleep');
const fetch = require('node-fetch');

/********************************  Page 1 ***********************************/

function Michelin_1() {
request("https://restaurant.michelin.fr/restaurants-etoiles-france/",
(error, response, html) => {

const $ = cheerio.load(html);
const links = [];
const page = [];

// => Find each links of Restaurant of France

$('div').find('div').find("a").each( function (index, value) {
page.push($(this).first()[0].attribs.href);
});
var i = 0;
// Clean links

page.forEach(function(element) {
  //console.log(i," : ",element.length);i++;
  if(element.length>135)
  //console.log(i," : ",element);i++;
  links.push(element);
})


// Browse each links and find The Restaurant and The Hôtel if there is one of them

var cpt = 0;
var Restaurants_1 = new Object();

links.forEach((url) => {
request( {uri : url}, (error, response, html) => {
const $ = cheerio.load(html);

// Declaration des variables
var restaurant = null;
/*if($('.poi_card-description').find('.poi_card-display-title').text()!='')
{
  restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();
}*/
restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();


//else if($('.poi_card-description').find('.poi_card-display-title').text()!='')
//restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();

Restaurants_1[cpt]=restaurant;
cpt++;

if (cpt ==links.length-1) {
for(var i in Restaurants_1)
{
//console.log(i+" => " + Restaurants_1[i]);
}

fs.writeFile("./Michelin_1.json", JSON.stringify(Restaurants_1, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
//    console.log("File has been created");
});
}
return Restaurants_1; // return restaurant page 1
// end of request( {uri : url}, ...
})
// end of links.forEach((url) ...
});
// end of request("https://www.relaischateaux.com/fr/site-map/etablissements")
});

} // end of function Michelin_1()
/********************************  Page 2 ***********************************/

function Michelin_2() {
request("https://restaurant.michelin.fr/restaurants-etoiles-france/page-2/",
(error, response, html) => {

const $ = cheerio.load(html);
const links = [];
const page = [];

// => Find each links of Restaurant of France

$('div').find('div').find("a").each( function (index, value) {
page.push($(this).first()[0].attribs.href);
});
var i = 0;
// Clean links

page.forEach(function(element) {
  //console.log(i," : ",element.length);i++;
  if(element.length>135)
  //console.log(i," : ",element);i++;
  links.push(element);
})


// Browse each links and find The Restaurant and The Hôtel if there is one of them

var cpt = 0;
var Restaurants_2 = new Object();

links.forEach((url) => {
request( {uri : url}, (error, response, html) => {
const $ = cheerio.load(html);

// Declaration des variables
var restaurant = null;
/*if($('.poi_card-description').find('.poi_card-display-title').text()!='')
{
  restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();
}*/
restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();


//else if($('.poi_card-description').find('.poi_card-display-title').text()!='')
//restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();

Restaurants_2[cpt]=restaurant;
cpt++;

if (cpt ==links.length-1) {
for(var i in Restaurants_2)
{
//console.log(i+" => " + Restaurants_1[i]);
}

fs.writeFile("./Michelin_2.json", JSON.stringify(Restaurants_2, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
//    console.log("File has been created");
});
}
return Restaurants_2; // return restaurant page 2
// end of request( {uri : url}, ...
})
// end of links.forEach((url) ...
});
// end of request("https://www.relaischateaux.com/fr/site-map/etablissements")
});

} // end of function Michelin_2()
/********************************  Page 3 ***********************************/

function Michelin_3() {
request("https://restaurant.michelin.fr/restaurants-etoiles-france/page-3/",
(error, response, html) => {

const $ = cheerio.load(html);
const links = [];
const page = [];

// => Find each links of Restaurant of France

$('div').find('div').find("a").each( function (index, value) {
page.push($(this).first()[0].attribs.href);
});
var i = 0;
// Clean links

page.forEach(function(element) {
  //console.log(i," : ",element.length);i++;
  if(element.length>135)
  //console.log(i," : ",element);i++;
  links.push(element);
})


// Browse each links and find The Restaurant and The Hôtel if there is one of them

var cpt = 0;
var Restaurants_3 = new Object();


links.forEach((url) => {
request( {uri : url}, (error, response, html) => {
const $ = cheerio.load(html);

// Declaration des variables
var restaurant = null;
/*if($('.poi_card-description').find('.poi_card-display-title').text()!='')
{
  restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();
}*/
restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();


//else if($('.poi_card-description').find('.poi_card-display-title').text()!='')
//restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();

Restaurants_3[cpt]=restaurant;
cpt++;

if (cpt ==links.length-1) {
for(var i in Restaurants_3)
{
//console.log(i+" => " + Restaurants_3[i]);
}

fs.writeFile("./Michelin_3.json", JSON.stringify(Restaurants_3, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };

  //  console.log("File has been created");
});
}
return Restaurants_3; // return restaurant page 3
// end of request( {uri : url}, ...
})
// end of links.forEach((url) ...
});
// end of request("https://www.relaischateaux.com/fr/site-map/etablissements")
});

} // end of function Michelin_3()
/********************************  Page 4 ***********************************/

function Michelin_4() {
request("https://restaurant.michelin.fr/restaurants-etoiles-france/page-4/",
(error, response, html) => {

const $ = cheerio.load(html);
const links = [];
const page = [];

// => Find each links of Restaurant of France

$('div').find('div').find("a").each( function (index, value) {
page.push($(this).first()[0].attribs.href);
});
var i = 0;
// Clean links

page.forEach(function(element) {
  //console.log(i," : ",element.length);i++;
  if(element.length>135)
  //console.log(i," : ",element);i++;
  links.push(element);
})


// Browse each links and find The Restaurant and The Hôtel if there is one of them

var cpt = 0;
var Restaurants_4 = new Object();


links.forEach((url) => {
request( {uri : url}, (error, response, html) => {
const $ = cheerio.load(html);

// Declaration des variables
var restaurant = null;
/*if($('.poi_card-description').find('.poi_card-display-title').text()!='')
{
  restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();
}*/
restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();

//else if($('.poi_card-description').find('.poi_card-display-title').text()!='')
//restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();

Restaurants_4[cpt]=restaurant;
cpt++;

if (cpt ==links.length-1) {
for(var i in Restaurants_4)
{
//console.log(i+" => " + Restaurants_4[i]);
}

fs.writeFile("./Michelin_4.json", JSON.stringify(Restaurants_4, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };

  //  console.log("File has been created");
});
}
return Restaurants_4; // return restaurant page 4
// end of request( {uri : url}, ...
})
// end of links.forEach((url) ...
});
// end of request("https://www.relaischateaux.com/fr/site-map/etablissements")
});

} // end of function Michelin_4()
/********************************  Page 5 ***********************************/

function Michelin_5() {
request("https://restaurant.michelin.fr/restaurants-etoiles-france/page-5/",
(error, response, html) => {

const $ = cheerio.load(html);
const links = [];
const page = [];

// => Find each links of Restaurant of France

$('div').find('div').find("a").each( function (index, value) {
page.push($(this).first()[0].attribs.href);
});
var i = 0;
// Clean links

page.forEach(function(element) {
  //console.log(i," : ",element.length);i++;
  if(element.length>135)
  //console.log(i," : ",element);i++;
  links.push(element);
})


// Browse each links and find The Restaurant and The Hôtel if there is one of them

var cpt = 0;
var Restaurants_5 = new Object();


links.forEach((url) => {
request( {uri : url}, (error, response, html) => {
const $ = cheerio.load(html);

// Declaration des variables
var restaurant = null;
/*if($('.poi_card-description').find('.poi_card-display-title').text()!='')
{
  restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();
}*/
restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();

//else if($('.poi_card-description').find('.poi_card-display-title').text()!='')
//restaurant = $('.poi_card-description').find('.poi_card-display-title').text().trim();

Restaurants_5[cpt]=restaurant;
cpt++;

if (cpt ==links.length-1) {
for(var i in Restaurants_5)
{
//console.log(i+" => " + Restaurants_5[i]);
}

fs.writeFile("./Michelin_5.json", JSON.stringify(Restaurants_5, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };


  //  console.log("File has been created");
});
}
return Restaurants_5; // return restaurant page 5
// end of request( {uri : url}, ...
})
// end of links.forEach((url) ...
});
// end of request("https://www.relaischateaux.com/fr/site-map/etablissements")
});

} // end of function Michelin_5()



// ************************ Main ******************************  //

Michelin_1()  // Page 1
Michelin_2()  // Page 2
Michelin_3()  // Page 3
Michelin_4()  // Page 4
Michelin_5()  // Page 5
