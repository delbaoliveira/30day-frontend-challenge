import Screen from "@/components/Screen"
import Timer from "@/components/Timer"

const Gallery = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 w-10/12 mx-auto">
      <Screen
        day={0}
        description="Build and deploy 30
            days of front-end"
        link="about"
      >
        <Timer></Timer>
      </Screen>
      <Screen day={1} description="Coming soon"></Screen>
      <Screen day={2} description="Coming soon"></Screen>
    </div>
  )
}

export default Gallery
