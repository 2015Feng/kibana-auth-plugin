export default function (server) {

  server.route({
    path: '/api/kibana-auth-plugin/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
