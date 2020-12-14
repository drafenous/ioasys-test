import { RoutesInterface } from 'interfaces';
import { EnterprisesModule } from './enterprises.module';
import { IdEnterpriseModule } from './id';

export const EnterprisesRoutes: RoutesInterface = {
    Enterprises: { route: '/enterprises', component: EnterprisesModule },
    IdEnterprise: { route: '/enterprises/:id', component: IdEnterpriseModule },
};
