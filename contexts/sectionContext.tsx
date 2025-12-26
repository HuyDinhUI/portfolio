"use client"

import React, { createContext, ReactNode, useState } from "react";

type sectionContextType = {
    section: string
    setSection: React.Dispatch<React.SetStateAction<string>>
}

export const SectionContext = createContext<sectionContextType | null>(null)

export const SectionProvider = ({children}: {children: ReactNode}) => {
    const [section, setSection] = useState<string>("")

    return (
        <SectionContext.Provider value={{section, setSection}}>
            {children}
        </SectionContext.Provider>
    )
}

