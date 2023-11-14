const fs = require('fs');
const { createServer } = require('node:http');
const { createSchema } = require('graphql-yoga');
const { createYoga } = require('graphql-yoga');
const arquivos = require('./arquivos');
const path = require('path');

const schema = createSchema({
    typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
    arquivos
})

const yoga = createYoga({
    schema,
    graphqlEndpoint: '/',
})

const server = createServer(yoga)

server.listen(4500), () => {
    console.log('Server running on :4500/graphql')
}