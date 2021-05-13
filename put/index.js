'use strict';

const dynamoose = require('dynamoose');
const ContactModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {

    const id = event.queryStringParameters && event.queryStringParameters.id;
    console.log(`this is the ID: ${id}`);
    const {name, phone} = JSON.parse(event.body);
    let data = await ContactModel.update({"id": id}, {"name": name},{"phone": phone});
    console.log(`this is the data: ${data}`);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}