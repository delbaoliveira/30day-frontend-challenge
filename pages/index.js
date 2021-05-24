import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"

export default function Home() {
  return (
    <>
      <Hero />
      <Layout>
        <Gallery />
      </Layout>
    </>
  )
}
