// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

const Web3 = require('web3');
import { Request, RestBindings, get, ResponseObject } from '@loopback/rest';
import { inject } from '@loopback/core';


/**
 * OpenAPI response for id()
 */
const GET_ID_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          headers: {
            type: 'object',
            properties: {
              'Content-Type': { type: 'number' },
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};


export class Web3EasyController {

  private client: any;

  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {
    this.client = new Web3('ws://localhost:8546');
  }

  // Map to `GET /ping`
  @get('/getId', {
    responses: {
      '200': GET_ID_RESPONSE,
    },
  })
  async getId(): Promise<object> {
    // Reply with a greeting, the current time, the url, and request headers
    let i = await this.client.eth.net.getId();
    console.log(i);
    return this.client.eth.net.getId()
      .then((networkId: number) => {
        return {
          id: networkId,
          headers: Object.assign({}, this.req.headers),
        }
      }
      );
  }
}
