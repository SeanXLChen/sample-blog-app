import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/lib/articles";

const Article = async ({ params }: { params: { slug: string } }) => {
    const articleData = await getArticleData(params.slug)

    return (
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between">
                <Link href="/" className="flex flex-row gap-1 place-items-center hover:text-neutral-400">
                    <ArrowLeftIcon width={20} />
                    <p>back to home</p>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}></article>
        </section>
    )

}

export default Article