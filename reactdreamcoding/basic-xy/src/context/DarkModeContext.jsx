import { createContext, useState } from "react";

//데이터를 컨텍스트에 담는다.
export const DarkModeContext = createContext();

//프로바이더는 우산을 만들어준다는 의미로 생각
export function DarkmodeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = ()=> setDarkMode(mode => !mode);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
};