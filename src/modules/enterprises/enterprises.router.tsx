import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from 'helpers';
import { EnterprisesRoutes } from './enterprises.routes';
import { HeaderComponent } from 'components';
import { EnterpriseHeader, SearchProvider } from 'contexts';

export const EnterprisesRouter: React.FC = () => {
    return (
        <>
            <HeaderComponent />
            <Switch>
                <SearchProvider.Provider>
                    <EnterpriseHeader.Provider>
                        <PrivateRoute path={EnterprisesRoutes.Enterprises.route} component={EnterprisesRoutes.Enterprises.component} exact />
                        <PrivateRoute path={EnterprisesRoutes.IdEnterprise.route} component={EnterprisesRoutes.IdEnterprise.component} />
                    </EnterpriseHeader.Provider>
                </SearchProvider.Provider>
            </Switch>
        </>
    );
};
