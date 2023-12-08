import Feed from "./components/Feed"

const Home = () => {
    return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center max-md:hidden"> AI-powered prompts</span>
      </h1>
      <p className="desc text-center">promptopia is a modern open source AI tool to discover, create and share creative prompts</p>
      <Feed/>
    
    </section>
    )
  }
  
  export default Home
  