import { useArticles } from "@/context/ArticlesProvider"

const ItemCategoryTag = ({category} : {category: string}) => {
    const { articles, setArticles } = useArticles();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const clickedCategory = event.currentTarget.textContent; // or use event.target if necessary
        console.log("Category clicked:", clickedCategory);
        // Here you can use `clickedCategory` to filter articles or perform other actions
        const filteredArticles = articles.filter(article => article.category === clickedCategory);
        setArticles(filteredArticles);
      };

  return (
    <>
    <button className='text-sm text-neutral-500 mx-2 rounded-2xl border border-neutral-300 px-1.5' onClick={handleClick} >{category}</button>
    </>
  )
}

export default ItemCategoryTag