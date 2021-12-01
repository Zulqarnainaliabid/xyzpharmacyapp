import React , {createContext} from 'react';
export const Context = createContext()
export const ContextProvider = ({children}) => {
    const [orderCompleted, setorderCompleted] = React.useState(false)
    const [TopSearchElement, setTopSearchElement] = React.useState(null)
    const [ServerData, setServerData] = React.useState(null)
    const [SearchingInputValue, setSearchingInputValue] = React.useState(null)
    const [UpdateCartItem, setUpdateCartItem] = React.useState(false)
    const [TotalAmount, setTotalAmount] = React.useState(null)
    const [CartLength, setCartLength] = React.useState(null)
    
    const HandaleOrderCompleted = (ToggleValue) => {
        setorderCompleted(ToggleValue);
    }
    const HandaleTopSearchElement = (ToggleValue) => {
        setTopSearchElement(ToggleValue);
    }

    const HandaleCompletedServerData = (ServerData) => {
        setServerData(ServerData);
    }

    const HandaleArraySearchInputValue = (SearchingInputValue) => {
        setSearchingInputValue(SearchingInputValue);
    }

    const HandaleUpdateCartItem = () => {
        setUpdateCartItem(!UpdateCartItem);
    }

    const HandaleSubTotal = (TotalAmount) => {
        setTotalAmount(TotalAmount);
    }

    const HandaleCartLength = (CartLength) => {
        setCartLength(CartLength);
    }

    return(
    <Context.Provider value={{CartLength,HandaleCartLength,HandaleSubTotal,TotalAmount,HandaleUpdateCartItem,UpdateCartItem,SearchingInputValue,HandaleArraySearchInputValue,ServerData,HandaleCompletedServerData,orderCompleted, HandaleOrderCompleted,HandaleTopSearchElement,TopSearchElement }}>
        {children}
    </Context.Provider>
    )
}