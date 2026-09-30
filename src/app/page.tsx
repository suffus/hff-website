import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import LatestNews from '@/components/LatestNews';
import { getLatestArticles } from '@/lib/news';

export default function Home() {
  const latest = getLatestArticles(3);

  return (
    <Layout>
      <Hero />
      <LatestNews articles={latest} />
      <FeatureCards />
    </Layout>
  );
}
