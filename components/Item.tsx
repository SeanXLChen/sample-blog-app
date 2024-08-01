import React from 'react'
import { ArticleItem } from '@/type'
import Link from 'next/link'
import ItemCategoryTag from './ItemCategoryTag'

type Props = {
    article: ArticleItem
    }

const Item = ({article} : Props) => {
  return (
    <div className='border rounded-md p-3'>
        <Link href={`/article/${article.id}`}>
        <div className='text-lg'>
          {article.title}
        </div>
        </Link>
        <div className='flex justify-start items-center'>
          <p className='text-sm text-neutral-500'>Published  •  {article.date}</p>
            <ItemCategoryTag category={article.category} />
        </div>
    </div>
  )
}

export default Item