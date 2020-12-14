import React, { createContext, useContext, useState } from 'react';
import { Assets } from 'assets';
import './atm.loader.styles.css';

type ILoadingContext = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = createContext<ILoadingContext>({
    isLoading: false,
    setIsLoading: () => null,
});

const Provider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <>
                {isLoading && (
                    <div className="loader-backdrop">
                        <img className="loader-spinner" src={Assets.other.loaderSpinner} alt="Carregando..." />
                    </div>
                )}
                {children}
            </>
        </LoadingContext.Provider>
    );
};

export function useLoader() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoader must be used within a Loading.Provider');
    }
    const { isLoading, setIsLoading } = context;
    return { isLoading, setIsLoading };
}

export const LoadingComponent = { Provider };
