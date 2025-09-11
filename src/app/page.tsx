import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeatureCards />
    </Layout>
  );
}