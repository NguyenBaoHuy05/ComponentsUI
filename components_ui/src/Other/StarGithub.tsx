"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Star } from "lucide-react";
export default function StarGithub() {
  const [starGithub, setStarGithub] = useState(0);
  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch(
          "https://api.github.com/repos/NguyenBaoHuy05/ComponentsUI"
        );
        const data = await res.json();
        setStarGithub(data.stargazers_count);
      }
      fetchData();
    } catch (error) {
      console.error("Error fetching GitHub stars:", error);
    }
  }, []);
  return (
    <div className="ml-auto flex">
      <Link href="https://github.com/NguyenBaoHuy05/ComponentsUI">
        <Github className="w-12 h-12" />
      </Link>

      <div className="hidden md:flex relative items-center ml-2 gap-2 rounded-lg overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -z-10 rounded-lg bg-gradient-to-l from-red-500 to-yellow-500  animate-spin"></div>
        <div className=" flex items-center translate-x-[3px] w-[90%] h-[90%] rounded-lg  bg-black z-20">
          <span className="text-white mx-2 text-3xl  ">{starGithub}</span>
          <Star className="w-10 h-10 text-yellow-500 mr-2" />
        </div>
      </div>
    </div>
  );
}
