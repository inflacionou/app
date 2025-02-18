"use client"

import * as React from "react"
import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "./button"

import Logo from "@/components/assets/logo_variant_1.svg"

const Nav = ({ }) => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="w-full flex justify-between relative max-w-[900px] items-center p-4">
        <Image src={Logo} alt="logo" width={40} />

        <Button>
          <Github />
        </Button>
      </div>
    </div>
  )

}

export { Nav }
