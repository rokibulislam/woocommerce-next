import React, { useState, useEffect } from 'react'
export const AppContext = React.createContext([ {}, () => {}]);

export const AppProvider = props => {
    const [cart,setCart] = useState(null)

    return (
        <AppContext.Provider value={[cart,setCart]}>
            {props.children}
        </AppContext.Provider>
    )
}