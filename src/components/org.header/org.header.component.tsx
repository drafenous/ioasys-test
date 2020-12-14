import { Assets } from 'assets';
import { Input } from 'components';
import { useEnterpriseHeader, useSearchProvider } from 'contexts';
import { Enterprise } from 'interfaces';
import { EnterprisesRoutes } from 'modules/enterprises/enterprises.routes';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchService } from 'services';
import './org.header.styles.css';

export const HeaderComponent: React.FC = () => {
    const { push, location } = useHistory();
    const { setFoundEnterprises } = useSearchProvider();
    const { enterpriseName, setEnterpriseName } = useEnterpriseHeader();

    const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
    const handleSearchButton = () => {
        setShowSearchInput(true);
    }
    const handleClose = () => {
        setShowSearchInput(false);
    }

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget
        if (value) {
            const service = searchService.search(value);
            service.then((data) => {
                const found = data as Enterprise;
                setFoundEnterprises([found]);
            });
        }
    }

    const handleBackButton = () => {
        setEnterpriseName('');
        setShowSearchInput(false);
    }

    useEffect(() => {
        console.log(enterpriseName);
        if (location.pathname !== EnterprisesRoutes.IdEnterprise.route) {
            setEnterpriseName('');
            setShowSearchInput(true)
        }
        if (!!enterpriseName) {
            setShowSearchInput(false)
        }
    }, [enterpriseName, location.pathname, setEnterpriseName])

    const showLogo = !showSearchInput && enterpriseName === '';

    return (
        <div className="header-wrapper">
            {showLogo && (
                <>
                    <img src={Assets.logoWhite['1x']} alt="Logo - Ioasys" className="logo-header" onClick={() => push(EnterprisesRoutes.Enterprises.route)} />
                    <img src={Assets.icon.search} alt="Procurar empresas" className="icon-search" onClick={handleSearchButton} />
                </>
            )}
            {showSearchInput && (
                <>
                    <div className="search-box">
                        <Input icon="search" className="input-search" placeholder="Pesquisar" onChange={handleSearch} />
                    </div>
                    <img src={Assets.icon.times} alt="Fechar busca" className="icon-close" onClick={handleClose} />
                </>
            )}
            {enterpriseName && (
                <>
                    <img src={Assets.icon.back} alt="Procurar empresas" className="icon-back" onClick={handleBackButton} />
                    {enterpriseName}
                </>
            )}
        </div>
    );
};
