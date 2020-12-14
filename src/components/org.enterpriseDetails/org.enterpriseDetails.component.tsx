import React from 'react';
import { getEnv, initialsGenerator, startWithSlash } from 'helpers';
import './org.enterpriseDetails.styles.css';

interface EnterpriseDetailsComponentProps {
    id: string;
    name: string;
    imagePath?: string;
}

export const EnterpriseDetailsComponent: React.FC<EnterpriseDetailsComponentProps> = ({ id, name, imagePath, children }) => {
    const parsedUrl = imagePath ? getEnv('BASE_URL') + startWithSlash(imagePath) : '';
    const initials = initialsGenerator(name);

    return <div className="enterprise-details-wrapper">
        <div className="enterprise-details-image">
            {parsedUrl && (
                <img src={parsedUrl} alt={`Foto da empresa: ${name}`} />
            )}
            {!parsedUrl && (
                <div className="generated-initials">{initials}</div>
            )}
        </div>
        <div className="enterprise-details-description">
            {children}
        </div>
    </div>
}