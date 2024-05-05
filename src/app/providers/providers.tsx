import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import store  from '../store'
import { Fallback } from 'shared/ui/fallback'

interface IProviders {
    /** Content that will be wrapped by providers. */
    readonly children: JSX.Element
}

export const Providers: FC<IProviders> = ({ children }) => {
    return (
        <ErrorBoundary FallbackComponent={Fallback}>
            <Provider store={store}>
                {children}
            </Provider>
        </ErrorBoundary>
    )
}