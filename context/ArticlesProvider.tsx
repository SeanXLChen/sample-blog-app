'Use Client'

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { ArticleItem } from "@/type";

interface ArticlesContextProps {
    articles: ArticleItem[];
    setArticles: Dispatch<SetStateAction<ArticleItem[]>>;
}

const ArticlesContext = createContext<ArticlesContextProps | undefined>(undefined);

export const useArticles = () => {
    const context = useContext(ArticlesContext);
    if (!context) {
        throw new Error("useArticles must be used within an ArticlesProvider");
    }
    return context;
};

export const ArticlesProvider = ({ children, initialArticles }: { children: ReactNode; initialArticles: ArticleItem[] }) => {
    const [articles, setArticles] = useState<ArticleItem[]>(initialArticles);

    return (
        <ArticlesContext.Provider value={{ articles, setArticles }}>
            {children}
        </ArticlesContext.Provider>
    );
};