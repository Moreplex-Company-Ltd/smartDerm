import CTASection from "../components/CTA";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import DefaultLayout from "../components/Layout/DefaultLayout";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <DefaultLayout>
      <HeroSection />
      <CTASection />

      <Footer />
    </DefaultLayout>
  );
}
