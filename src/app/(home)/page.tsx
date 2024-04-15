import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard, { Product } from "./components/product-card";

const products: Product[] = [
  {
    id: 1,
    name: "Spring and summershoes",
    description: "good products",
    image: "/pizza-margherita.png",
    price: 100,
  },
  {
    id: 2,
    name: "Spring and summershoes",
    description: "good products",
    image: "/pizza-margherita.png",
    price: 100,
  },
  {
    id: 3,
    name: "Spring and summershoes",
    description: "good products",
    image: "/pizza-margherita.png",
    price: 100,
  },
  {
    id: 4,
    name: "Spring and summershoes",
    description: "good products",
    image: "/pizza-margherita.png",
    price: 100,
  }
];


export default function Home() {
  return (
    <>
      <section className=" bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className=" text-7xl font-black font-sans leading-2" >Super Delicious Pizza in <br />
              <span className=" text-primary" >Only 45 minutes</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">Enjoy a free Meal If your Order Takes More Than 45 minutes</p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold" >
              Get your pizza now
            </Button>

          </div>
          <div>
            <Image alt="pizza-img" src={"/pizza-margherita.png"} width={400} height={400} />
          </div>
        </div>
      </section>
      {/* tabs  section */}
      <section>

      </section>
      <div className="container py-12">
        <Tabs defaultValue="pizza" className="text-md">
          <TabsList className=" gap-3">
            <TabsTrigger value="pizza">Pizza</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
          </TabsList>
          <TabsContent value="pizza">
            <div className="grid grid-cols-4 gap-6 mt-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </TabsContent>

          <TabsContent value="beverages">
            <div className="grid grid-cols-4 gap-6 mt-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>



      </div>

    </>
  );
}
