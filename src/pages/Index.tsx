import CodeEditorLayout from "../components/CodeEditorLayout";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/Skills";

const Index = () => {
  return (
    <CodeEditorLayout>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </CodeEditorLayout>
  );
};

export default Index;
