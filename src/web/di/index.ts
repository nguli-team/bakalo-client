import Infrastructures from './Infrastructures';
import Repositories from './Repositories';
import Services from './Services';

const infrastructures = Infrastructures();
const repositories = Repositories(infrastructures);
const services = Services(repositories);

export default {
  services
};
