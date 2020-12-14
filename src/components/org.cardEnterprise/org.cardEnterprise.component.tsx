import React from 'react';
import { getEnv, initialsGenerator, startWithSlash } from 'helpers';
import './org.cardEnterprise.styles.css';
import { useHistory } from 'react-router-dom';
import { EnterprisesRoutes } from 'modules/enterprises/enterprises.routes';
import { useEnterpriseHeader } from 'contexts';

interface CardEnterprise {
    id: number;
    name: string;
    imagePath?: string;
    businessType?: string;
    country?: string;
}

export const CardEnterpriseComponent: React.FC<CardEnterprise> = ({ id, name, imagePath, businessType, country }) => {
    const { push } = useHistory();
    const handleOnClick = () => {
        push(`${EnterprisesRoutes.Enterprises.route}/${id}`);
    }

    const parsedUrl = imagePath ? getEnv('BASE_URL') + startWithSlash(imagePath) : '';
    const initials = initialsGenerator(name);

    return <div className="card-enterprise-wrapper" onClick={handleOnClick}>
        <div className="card-enterprise-image">
            {parsedUrl && (
                <img src={parsedUrl} alt={`Foto da empresa: ${name}`} />
            )}
            {!parsedUrl && (
                <div className="generated-initials">{initials}</div>
            )}
        </div>
        <div className="card-enterprise-metadata">
            <h1 className="enterprise-name">{name}</h1>
            <h2 className="enterprise-business-type">{businessType}</h2>
            <h3 className="enterprise-country">{country}</h3>
        </div>
    </div>
}