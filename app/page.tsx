'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

//Components
import Button from "@/components/Button/Button";

//Homepage Image
import HomePageImage from "@/assets/home-pic.png"

const Home = () => {
  const router = useRouter();
  //const startQuiz = () => router.push("/quiz");

  const handleButtonClick = () => {
    router.push("./quiz");
  };

  return (
    <div className='text-center'>
      <p className="text-white p-4">Do you have what it takes to became the React-Quiz master?</p>
      <Image className="max-w-[700px] w-full rounded-[10px]" src={HomePageImage} alt="home-page"></Image>
      <p className="text-[#9f50ac] pt-2 pb-8 text-[10px]">Image from Unsplash by Wadi</p>
      <Button text="Start Quiz" onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
