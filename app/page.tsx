import ArticlesPage from './ArticlesPage';
import { getCategorisedArticles, getSortedArticles } from '@/lib/articles';

const HomePage = async () => {
  const articles = getSortedArticles();

  return <ArticlesPage articleItems={articles} />;
};

export default HomePage;