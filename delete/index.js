'use strict';

const dynamoose = require('dynamoose');
const ContactModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;

    await ContactModel.delete(id);

    return {
      statusCode: 200,
      body: 'contact successfully deleted'
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}