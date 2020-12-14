import { CardEnterpriseComponent } from 'components';
import { useSearchProvider } from 'contexts';
import { Enterprise } from 'interfaces';
import React from 'react';
import { searchService } from 'services';
import './enterprises.styles.css';

export const EnterprisesModule: React.FC = () => {
    const { foundEnterprises, setFoundEnterprises } = useSearchProvider();

    const handleMockData = () => {
        searchService.showEnterprise('1').then(data => {
            const mock = data.enterprise as Enterprise;
            setFoundEnterprises([mock]);
        });
    }

    return (
        <div className={foundEnterprises === null ? 'home-wrapper' : 'container'}>
            {foundEnterprises === null && (
                <div className="home-message" onClick={handleMockData}>Clique na busca para iniciar.<br />(Devido a API retornar sempre vazia, clique aqui para ver um exemplo)</div>
            )}
            {foundEnterprises && !foundEnterprises.length && (
                <div className="home-message">Nenhuma empresa foi encontrada para a busca realizada.</div>
            )}
            {foundEnterprises && foundEnterprises.length > 0 && (
                <div className="container">
                    {foundEnterprises?.map((enterprise, index) =>
                        <CardEnterpriseComponent key={index} id={enterprise.id} name={enterprise.enterprise_name} imagePath={enterprise.photo} businessType={enterprise.enterprise_type?.enterprise_type_name} country={enterprise.country} />
                    )}
                </div>
            )}
        </div>
    );
};
