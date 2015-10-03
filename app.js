import Fluxible from 'fluxible';
import Application from './components/app';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';


// create new fluxible instance
const app = new Fluxible({
  component: Application,
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);


module.exports = app;

