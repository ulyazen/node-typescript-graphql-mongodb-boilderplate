// import 'module-alias/register';

// import * as express from 'express';
// import * as cors from 'cors';

// const {graphqlHTTP} = require('express-graphql');

// import schema from './graphql/schema';
// import config from './config';

// import {connectDb} from './db';

// const app = express();

// connectDb();

// app.use(cors());

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

// app.listen(config.serverPort, () => {
//   console.log(`now listening for requests on port ${config.serverPort}`);
// });

// export default app;

import 'module-alias/register'

import * as express from 'express'

import { graphqlHTTP } from 'express-graphql'

import * as cors from 'cors'

import schema from './graphql/schema'
import config from './config'

import { connectDb } from './db'

const app = express()
const expressPlayground =
  require('graphql-playground-middleware-express').default

connectDb()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(config.serverPort, () => {
  console.log(`now listening for requests on port ${config.serverPort}`)
})

export default app
