import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


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
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>



      </div>

    </>
  );
}
