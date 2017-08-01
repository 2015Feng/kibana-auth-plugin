import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'kibana-auth-plugin',
    uiExports: {

      app: {
        title: 'Kibana Auth Plugin',
        description: 'An awesome Kibana plugin',
        main: 'plugins/kibana-auth-plugin/app'
      },


      // translations: [
      //   resolve(__dirname, './translations/es.json')
      // ],


      hacks: [
        'plugins/kibana-auth-plugin/hack'
      ]

    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },


    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }


  });
};
