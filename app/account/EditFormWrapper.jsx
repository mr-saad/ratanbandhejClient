"use client"
import dynamic from "next/dynamic"

const EditForm = dynamic(() => import("./EditForm"), { ssr: false })

export default function EditFormWrapper({ user, isEditable }) {
  return <EditForm user={user} isEditable={isEditable} />
}
