import { Inter } from "@next/font/google";
import HomeComponent from "../components/app/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeComponent />;
}
