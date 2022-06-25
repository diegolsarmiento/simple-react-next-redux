import type { NextPage } from 'next';
import Layout from '../components/Layout';
import CommentBox from '../components/CommentBox';

const Post: NextPage = () => {
    return (
        <Layout>
            <h1>Post</h1>
            <CommentBox />
        </Layout>
    )
}

export default Post;