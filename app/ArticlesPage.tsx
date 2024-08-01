'use client';

import { useState, useEffect } from 'react';
import Item from '@/components/Item';
import { ArticleItem } from "@/type";
import SelectCategory from '@/components/SelectCategory';

interface Props {
    articleItems: ArticleItem[]
}

const ArticlesPage = ({ articleItems }: Props) => {
    const [articles, setArticles] = useState(articleItems);
    console.log(articles);

    return (
        <section className="mx-auto w-11/12 md:w-1/2 mt-20 mb-20 flex flex-col gap-14">
            <header className='font-inter font-light text-5xl text-neutral-900 text-center'>
                <h1>Sean's blog</h1>
            </header>
            <section className="flex flex-col gap-2">
                <SelectCategory />
                {articles !== null && articles.map((article) => (
                    <Item
                        key={article.id}
                        article={article}
                    />
                ))}
            </section>
        </section>
    );
};

export default ArticlesPage;