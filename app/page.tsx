import ArticleItemList from "@/components/ArticleItemList"
import { getCategorisedArticles } from "@/lib/articles"

const HomePage = () => {
  const articles = getCategorisedArticles()
  // console.log(articles)
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 mb-20 flex flex-col gap-16">
      <header className='font-inter font-light text-5xl text-neutral-900 text-center'>
        <h1>Sean's blog</h1>
      </header>
      <section className="flex flex-col gap-10">
        {articles !== null && Object.keys(articles).map((article) => 
          <ArticleItemList 
          category={article}
          articles={articles[article]}
          key={article}
          />
        ) }
      </section>
    </section>
  )
}

export default HomePage