var request = require("request-promise");
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
const cheerio = require('cheerio');
var http = require('http');
const fetch = require('node-fetch');
const michelin = require('./michelin');
var starred = michelin.start;



//Relais- Chateaux
async function Relais_Chateaux()
{
  var urls = [];
	await request('https://www.relaischateaux.com/fr/site-map/etablissements',(error, response, html)=> {
  var $ = cheerio.load(html);
	$('#countryF').find("h3:contains('France')").parent().find('.listDiamond > li').each( (index, value) => {
	urls.push($(this).find("a").first()[0].attribs.href);			});		});
	return urls;
}

//Recuperer les weekends
async function Samedi(mois)
  {    var jourMois=[];
		 for (var i=1;i<32;i++)
		   {
         		var week_end = new Date( '2019-'+mois+'-'+i);
						if (week_end.getDay() == 6 )//samedi
						{
								jourMois.push(i);	}	}
		 return jourMois;
	}


