// The backend code to fetch articles from the database
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import moment from 'moment';
import { remark } from 'remark';
import html from 'remark-html';

import type { ArticleItem } from '@/type';

// The directory where the articles are stored
const articlesDirectory = path.join(process.cwd(), 'articles');

export const getSortedArticles = (): ArticleItem[] => {
    const fileNames: string[] = fs.readdirSync(articlesDirectory); // Get all the file names in the articles directory

    const allArticleData = fileNames.map((fileName) => {
        const id: string = fileName.replace(/\.md$/, ''); // Remove the .md extension
        const fullPath = path.join(articlesDirectory, fileName); // Get the full path of the file
        const fileContents = fs.readFileSync(fullPath, 'utf-8'); // Read the file contents
        const matterResult = matter(fileContents); // store the mata data of the article

        return {
            id: id,
            title: matterResult.data.title,
            date: moment(matterResult.data.date, "DD-MM-YYYY").format("YYYY-MM-DD"),
            category: matterResult.data.category,
        };
    });

    return allArticleData.sort((a, b) => {
        const format = "YYYY-MM-DD";
        const dateA = moment(a.date, format);
        const dateB = moment(b.date, format);
        if (dateA.isBefore(dateB)) {
            return 1;
        }
        else if (dateA.isAfter(dateB)) {
            return -1;
        }
        else {
            return 0;
        }
    });
}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles();
    const categorisedArticles: Record<string, ArticleItem[]> = {};

    sortedArticles.forEach((article) => {
        if (!categorisedArticles[article.category]) {
            categorisedArticles[article.category] = [];
        } 
        categorisedArticles[article.category].push(article);
    });

    return categorisedArticles;
}


// serving the article content
export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        title: matterResult,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("MM Do, YYYY"),
    }
}