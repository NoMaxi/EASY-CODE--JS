// component
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { SignupComponent } from './components/signup.component';
import { NotFoundComponent } from './components/notfound.component';
import { UserComponent } from './components/user.component';
import { NavbarComponent } from './components/navbar.component';
import { NewsComponent } from './components/news.component';
import { WinnersComponent } from './components/winners.component';

//services
import { ActiveRoute } from './core/active-route.service';
import { AuthGuard } from './guards/auth.guard';

const routes = {
    '/': {
        component: new HomeComponent(),
        guard: new AuthGuard(),
    },
    '/login': {
        component:  new LoginComponent()
    },
    '/signup': {
        component: new SignupComponent()
    },
    '/news': {
        component: new NewsComponent(),
        guard: new AuthGuard()
    },
    '/winners': {
        component: new WinnersComponent()
    },
    '/users/:id': {
        component: new UserComponent(),
        guard: new AuthGuard()
    },
    '**': {
        component: new NotFoundComponent()
    }
};

const activeRoute = new ActiveRoute();

const router = async () => {
    // Get content container and header container
    const container = document.querySelector('app-container');
    const header = null || document.querySelector('app-header');
    // Get active route
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');

    // Get component for active route
    const component = routes[url] ? routes[url]['component'] : routes['**']['component'];
    const guard = routes[url] ? routes[url]['guard'] : null;
    // Check guard
    if (guard && !guard.check()) return;

    // render header
    if (header) {
        const navbarComponent = new NavbarComponent();
        header.innerHTML = navbarComponent.render();
        navbarComponent.afterRender();
    }

    await component.beforeRender();
    container.innerHTML = component.render();
    component.afterRender();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);



