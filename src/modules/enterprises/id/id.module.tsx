import { EnterpriseDetailsComponent } from 'components';
import { useEnterpriseHeader } from 'contexts';
import { Enterprise } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { searchService } from 'services';

interface RouteParamsInterface {
    id: string;
}

export const IdEnterpriseModule: React.FC<RouteComponentProps<RouteParamsInterface>> = ({ match }) => {
    const { id } = match.params;
    const [enterprise, setEnterprise] = useState<Enterprise | undefined>(undefined);
    const { setEnterpriseName } = useEnterpriseHeader();

    useEffect(() => {
        const service = searchService.showEnterprise(id);
        service.then(data => {
            setEnterprise(data.enterprise);
            setEnterpriseName(data.enterprise.enterprise_name);
        })
    }, [enterprise, id, setEnterpriseName])

    return (
        <div className="container">
            {enterprise && (
                <EnterpriseDetailsComponent id={id} name={enterprise.enterprise_name} imagePath={enterprise.photo}>
                    {enterprise.description}
                </EnterpriseDetailsComponent>
            )}
        </div>
    )
}