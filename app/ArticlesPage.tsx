'use client';

import { useState, useEffect } from 'react';
import Item from '@/components/Item';
import { ArticleItem } from "@/type";
import { ArticlesProvider, useArticles } from '@/context/ArticlesProvider';
import SearchItems from '@/components/SearchItems';

interface Props {
    articleItems: ArticleItem[]
}

const ArticlesContent = () => {
    const { articles, setArticles } = useArticles();

    return (
        <section className="flex flex-col gap-2">
            <SearchItems />
            {articles !== null && articles.map((article) => (
                <Item
                    key={article.id}
                    article={article} />
            ))}
        </section>
    );
};

const ArticlesPage = ({ articleItems }: Props) => {
    return (
        <ArticlesProvider initialArticles={articleItems}>
            <section className="mx-auto w-11/12 md:w-1/2 mt-20 mb-20 flex flex-col gap-14">
                <header className='font-inter font-light text-5xl text-neutral-900 text-center'>
                    <h1>Sean's blog</h1>
                </header>
                <ArticlesContent />
            </section>
        </ArticlesProvider>
    );
};

export default ArticlesPage;