import { Inter } from "@next/font/google";
import Head from "next/head";
import Pizza from "../components/Pizza/Pizza";
import Slider from "../components/Slider/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Resturant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {/* ** Pizza Cards */}
      <Pizza />
    </>
  );
}