import Hapi from '@hapi/hapi';
import routes from './routes';
const start = async()=>{
    const server = Hapi.server({
        port: 8000,
        host:'localhost'
    })

    routes.forEach(route => server.route(route))

    server.route({
        method:'GET',
        path:'/hello',
        handler:(req,h)=>{
            return  'Hello!';
        }
    })

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`)
}


process.on('unhandleRejection', err=>{
    console.log(err);
    process.exit(1);
})

start();
