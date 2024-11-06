"use client"

import dynamic from "next/dynamic"

const CreateAccountForm = dynamic(() => import("./CreateAccountForm"), {
  ssr: false,
})
export default function FormWrapper() {
  return <CreateAccountForm />
}
