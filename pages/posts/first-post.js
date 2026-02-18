import Layout from '../../components/layout';
import Link from "next/link";

export default function FirstPost() {

    return (
    <Layout>
    <h1>First Post</h1>
    <h2>
        <Link href='/'>Back to Home</Link>
        {/* https://nextjs.org/learn/pages-router/navigate-between-pages-client-side */}
    </h2>
    </Layout>
  );

}