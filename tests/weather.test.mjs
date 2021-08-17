import WeatherModel from '../model/Weather.mjs';
import XmlBodyParser from "../lib/XmlBodyParser.mjs";

describe('As a Weather API user', () => {
    describe('I have to get HTTP response body', () => {
        test('with [Title] node', async () => {
            let {data} = await WeatherModel.getWeatherData();
            const title = XmlBodyParser.getTitle(data);

            //  TODO: insert verifications to verify Title node value
            // ...
        });

        test('with [Channel] items', async () => {
            let {data} = await WeatherModel.getWeatherData();
            const items = XmlBodyParser.getItems(data);

            //  TODO: insert verifications to check that every item node contains the following child nodes:
            // - title
            // - link
            // - guid
            // - description
            // - pubDate

            //  TODO: the verifications should check that:
            // - link node value contains a href
            // - guid node has "isPermaLink" attrubyte

        });
    });
});