import { AuthService } from "../services/auth.service";
import { Routing } from "../core/routing.service";

export class NavbarComponent {
    constructor() {
        this._authService = new AuthService();
        this._routing = new Routing();
    }

    async beforeRender() {}

    render() {
        if (!this._authService.token) return '';
        return `
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Social Network</a>
            <ul class="navbar-nav d-flex flex-row w-50 justify-content-around">
                <li class="nav-item" >
                    <a class="nav-link text-uppercase font-weight-bolder"
                    href="/#/users/${this._authService.userId}" 
                    >My profile</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link text-uppercase font-weight-bolder"
                    href="/#/winners" 
                    >Winners</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link text-uppercase font-weight-bolder"
                    href="/#/news" 
                    >News</a>
                </li>
            </ul>
            <button class="btn btn-primary logout-btn">Logout</button>
        </nav>`;
    }

    afterRender() {
        if (!this._authService.token) return;

        document.querySelector('.logout-btn')
            .addEventListener('click', (e) => {
                this._authService.logout()
                    .then(() => this._routing.navigate('/login')); 
            })
    }
}