import React, { createContext, useContext, useState } from 'react';
import { Enterprises } from 'interfaces';

type IEnterprisesContext = {
    foundEnterprises: Enterprises | null;
    setFoundEnterprises: React.Dispatch<React.SetStateAction<Enterprises | null>>;
};

const EnterprisesContext = createContext<IEnterprisesContext>({
    foundEnterprises: null,
    setFoundEnterprises: () => null,
});

const Provider: React.FC = ({ children }) => {
    const [foundEnterprises, setFoundEnterprises] = useState<Enterprises | null>(null);

    return <EnterprisesContext.Provider value={{ foundEnterprises, setFoundEnterprises }}>
        {children}
    </EnterprisesContext.Provider>
}

export function useSearchProvider() {
    const context = useContext(EnterprisesContext);
    if (!context) {
        throw new Error('useSearchProvider must be used within a Loading.Provider');
    }
    const { foundEnterprises, setFoundEnterprises } = context;
    return { foundEnterprises, setFoundEnterprises };
}

export const SearchProvider = { Provider };