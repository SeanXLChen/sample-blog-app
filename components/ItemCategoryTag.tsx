
const ItemCategoryTag = ({category} : {category: string}) => {
  return (
    <>
    <p className='text-sm text-neutral-500 mx-2 rounded-2xl border border-neutral-300 p-1'>{category}</p>
    </>
  )
}

export default ItemCategoryTag