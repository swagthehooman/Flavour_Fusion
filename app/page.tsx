import { styleScript, oleoScript, dongle } from "./fontConst";
import CuisineCard from "./components/CuisineCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className={styleScript.className}>
        <div className='flex justify-evenly items-center w-full'>
          <img src='/images/salad_healthy_1.png' alt='healthy' className='w-[20%]' />
          <p className="text-5xl w-1/3 text-center">Wanna cook something special? <br />
            A Date or quite night in? <br />
            We got yo back.</p>
        </div>
        <div className='flex justify-evenly items-center w-full'>
          <div className="w-1/3 text-center">
            <p className={"text-5xl pb-4 mb-4"}>Browse through our extensive and delicious catalog of recipies.</p>
            <div className="mt-8">
              <Link href="/cuisines" className={"border bg-button-color drop-shadow-3xl rounded-lg pt-4 pb-4 pl-8 pr-8 text-3xl w-1/3 " + (styleScript.className)}>Explore</Link>
            </div>

          </div>
          <img src='/images/healthy_sprout.png' alt='healthy' className='w-[20%]' />
        </div>
      </section>
      {/* Recommendations */}
      <section className={"mt-8 text-center " + (styleScript.className)}>
        <p className="text-5xl mb-2">Our Recommendations</p>

        <div className="m-8 grid grid-cols-2 gap-8 place-items-center">
          <CuisineCard title="Chinese" description={["Feeling chinese takeout?", "70 Recipies.",
            "Fast and delicious.."]} image="/images/chinese_cuisine.jpeg" link="/recipeList" key={1} />

          <CuisineCard title="Indian" description={["Craving for that Indian spicy?", "50+ Recipies.", "Finger licking good.."]} image="/images/indian_cuisine.jpeg" link="/recipeList" key={2} />

          <CuisineCard title="Healthy" description={["Want a right start to the day?", "20+ Recipies.", "Prepare exciting salad dishes.."]} image="/images/salad_healthy.jpeg" link="/recipeList" key={3} />

          <CuisineCard title="Italian" description={["Date night?", "30+ Recipies", "Impress your date.."]} image="/images/italian_cuisine.jpeg" link="/recipeList" key={4} />
        </div>

        <div className="mt-16">
          <Link href="/cuisines" className={"border bg-button-color drop-shadow-3xl rounded-lg pt-4 pb-4 pl-8 pr-8 text-3xl " + (styleScript.className)}>Browse more recipies</Link>
        </div>

      </section>
      {/* contacts section */}
      <section className="mt-16 flex justify-evenly items-center gap-8">
        <p className={(styleScript.className) + " text-5xl"}>Flavour Fusion</p>
        <div className="text-center">
          <p className={(styleScript.className) + " text-3xl mb-4"}>About the creator</p>
          <p className={(styleScript.className) + " text-3xl mb-4"}>Explore Recipies</p>
          <p className={(styleScript.className) + " text-3xl mb-4"}>Contact us</p>
        </div>
      </section>
    </main>
  )
}