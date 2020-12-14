import React, { createContext, useContext, useState } from 'react';

type IEnterpriseHeaderContext = {
    enterpriseName: string;
    setEnterpriseName: React.Dispatch<React.SetStateAction<string>>;
};

const EnterpriseHeaderContext = createContext<IEnterpriseHeaderContext>({
    enterpriseName: '',
    setEnterpriseName: () => null,
});

const Provider: React.FC = ({ children }) => {
    const [enterpriseName, setEnterpriseName] = useState<string>('');

    return <EnterpriseHeaderContext.Provider value={{ enterpriseName, setEnterpriseName }}>
        {children}
    </EnterpriseHeaderContext.Provider>
}

export function useEnterpriseHeader() {
    const context = useContext(EnterpriseHeaderContext);
    if (!context) {
        throw new Error('useEnterpriseHeader must be used within a Loading.Provider');
    }
    const { enterpriseName, setEnterpriseName } = context;
    return { enterpriseName, setEnterpriseName };
}

export const EnterpriseHeader = { Provider };