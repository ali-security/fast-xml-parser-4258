"use strict";

const {XMLParser, XMLValidator} = require("../src/fxp");

describe("unpaired and empty tags", function() {
    fit("bug test", function() {

        const xmlData = `<root attr="&#9999999;"/>`;
        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: '',
						//processEntities: true,
						htmlEntities: true
        };
        const parser = new XMLParser(options);
        // console.log(JSON.stringify(parser.parse(xml)));

        let result = parser.parse(xmlData);

        console.log(JSON.stringify(result,null,4));
        // expect(result).toEqual(expected);

    });
    xit("bug test", function() {

        const xmlData = `<script/>`;
        const options = {
            allowBooleanAttributes: true,
            ignoreAttributes: false,
            stopNodes: ["*.pre", "*.script"],
        };
        const parser = new XMLParser(options);
        // console.log(JSON.stringify(parser.parse(xml)));

        let result = parser.parse(xmlData);

        console.log(JSON.stringify(result,null,4));
        // expect(result).toEqual(expected);

    });


});