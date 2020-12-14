import { RoutesInterface } from 'interfaces';
import { LoginModule } from './login.module';

export const LoginRoutes: RoutesInterface = {
    Login: { route: '/login', component: LoginModule },
};
