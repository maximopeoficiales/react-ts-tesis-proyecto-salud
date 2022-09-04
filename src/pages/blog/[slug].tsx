import { useParams } from "react-router-dom";

interface MyProps {
}
const BlogWithSlug = ({ }: MyProps) => {
    const { slug } = useParams<{ slug: string }>()
    return <h1>Post: {slug}</h1>
    
}

export default BlogWithSlug;