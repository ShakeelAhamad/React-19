import { Fragment } from "react"

const HandleFragmentDemo = () => {
    const posts = [
        { id: 1, title: 'An update', body: "It's been a while since I posted..." },
        { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
    ];

    return (
        <>
            <h1>Fragment in React JS.</h1>
            {
                posts.map((item, ind) => (
                    <Fragment key={ind}>
                        <PostTitle title={item.title} />
                        <PostBody body={item.body} />
                    </Fragment>

                ))
            }
        </>
    )
}
export default HandleFragmentDemo;

function PostTitle({ title }) {
    return <h1>{title}</h1>
}

function PostBody({ body }) {
    return (
        <article>
            <p>{body}</p>
        </article>
    );
}