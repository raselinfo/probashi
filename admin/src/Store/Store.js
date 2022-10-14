import { createContext, useState } from "react"

export const Store = createContext()

const ContextProb = {
    Provider({ children }) {
        const [user, setUser] = useState(
            localStorage.getItem('user') ? localStorage.getItem('user') : null
        )

        return <Store.Provider value={{ user, setUser }}>
            {children}
        </Store.Provider>
    }
}

export default ContextProb