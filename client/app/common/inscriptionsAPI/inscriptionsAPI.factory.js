import config from './config.json';

const inscriptionsAPI = ($resource) => {
  const actions = {
    get: { method: 'GET', url: config.baseUrl + config.parameters },
    remove: { method: 'DELETE', url: config.baseUrl + config.parameters },
    delete: { method: 'DELETE', url: config.baseUrl + config.parameters }
  }

  return $resource(config.baseUrl, {}, actions, {});
}

export default ['$resource', inscriptionsAPI];
