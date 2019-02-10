const Dropbox = require('dropbox').Dropbox;

/**
  * Dropbox adapter
  * @namespace adapter
  * @prop {object} info
  * @prop {object} client
  * @prop {object} input
  * @prop {object} output
  * @prop {object} vars
  */
module.exports = {
  /**
    * Descriptive information about adapter
    * @namespace info
    * @prop {String} name - Name of adapter used as context for bot
    */
  info: {
    name: 'dropbox'
  },
  /**
    * Client configuration
    * @namespace client
    * @prop {Slack} instance - API class instance
    * @prop {Object} methods - Login method used to invoke authentication
    */
  client: {
    instance: Dropbox,
    methods: {
      login: null // Login on instance initialisation
    }
  },
  /**
    * Input configuration
    * @namespace input
    */
  input: {
    /**
      * Computer vision algorithms
      */
    cva: {support: true},
    /**
      * Natural language understanding
      */
    nlu: {support: false},
    /**
      * Speech recognition layer
      */
    srl: {support: false}
  },
  /**
    * Output configuration
    * @namespace output
    * @param {String} format - File format for outputting content
    * @param {String} target - Type of client that handles response
    */
  output: {
    format: 'txt', // Text
    target: 'fs' // File system
  },
  /**
    * Variable configuration
    * @namespace vars
    * @param {String} accessToken - Access token used to authenticate (app specific)
    */
  vars: {
    accessToken: 'DROPBOX_OAUTH_TOKEN', // Access token
  }
};
