// import Link from 'next/link';
// import type { ArticleItem } from '@/type'
// import ItemCategoryTag from './ItemCategoryTag';

// interface Props {
//   category: string
//   articles: ArticleItem[]
// }

// const ArticleItemList = ({ category, articles }: Props) => {
//   return (
//     <div className='flex flex-col gap-5'>
//       <h2 className='font-cormorantGaramond text-4xl'>{category}</h2>
//       <div className='flex flex-col gap-2.5 font-poppins text-lg'>
//         {articles.map((article, id) => (
//           <Link key={id} href={`article/${article.id}`} className='text-neutral-900 hover:text-amber-700 transition duration-150 border rounded-md p-3'>
//             <div>
//               {article.title}
//             </div>
//             <div className='flex justify-start items-center'>
//               <p className='text-sm text-neutral-500'>Published  •  {article.date}</p>
//               <ItemCategoryTag category={category} />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ArticleItemList