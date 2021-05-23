import Footer from "@/components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className="mx-auto max-w-4xl">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
