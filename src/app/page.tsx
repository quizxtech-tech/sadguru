import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Sadguru Sales Agency",
};

export default function Home() {
  return (
    <HomeMain />
  );
}
