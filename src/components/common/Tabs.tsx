import { createContext, PropsWithChildren, useContext, useState } from "react";

export default function Tabs({children}: PropsWithChildren) {
    const [activeTab, setActiveTab] = useState(0);

    return <TabContext.Provider value={{ activeTab, setActiveTab}}>
        {children}
    </TabContext.Provider>
}

const TabContext = createContext({ 
    activeTab:0, 
    setActiveTab: (_: number) => {}, 
});

export function Tab({ children, index }: PropsWithChildren<{ index: number }>) {
    const { activeTab, setActiveTab } = useContext(TabContext);

    return <button  onClick={() => setActiveTab(index)}>{children}</button>
}

