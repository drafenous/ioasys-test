import { RoutesInterface } from 'interfaces';
import { EnterprisesRouter } from 'modules/enterprises/enterprises.router';
import { EnterprisesRoutes } from 'modules/enterprises/enterprises.routes';
import { LoginRouter } from 'modules/login/login.router';
import { LoginRoutes } from 'modules/login/login.routes';

export const AppRoutes: RoutesInterface = {
    Enterprises: { route: EnterprisesRoutes.Enterprises.route, component: EnterprisesRouter },
    Login: { route: LoginRoutes.Login.route, component: LoginRouter },
};
