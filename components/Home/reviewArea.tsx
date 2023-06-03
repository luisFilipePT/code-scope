"use client"

import { useState } from "react"
import Link from "next/link"
import { TOut } from "@/ai"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { BigO } from "@/components/Home/bigO"
import { Bugs } from "@/components/Home/bugs"
import { Code } from "@/components/Home/code"
import { Performance } from "@/components/Home/performance"
import { Readability } from "@/components/Home/readability"
import { Security } from "@/components/Home/security"

type ReviewCode = (value: string) => Promise<TOut | undefined>

interface CodeProps {
  reviewCode: ReviewCode
}

export function ReviewArea({ reviewCode }: CodeProps) {
  const [review, setReview] = useState<TOut | undefined>(undefined)
  const { toast } = useToast()
  async function submitCode(code: string) {
    const res = await reviewCode(code)
    console.log("res", res)
    if (!res) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Sorry 🙇🏼. Can you open an issue please 🙏🏼?",
        action: (
          <ToastAction altText="Goto schedule to undo">
            <Link href="https://github.com/" passHref>
              <Button>Open Issue</Button>
            </Link>
          </ToastAction>
        ),
      })
    } else {
      setReview(res)
    }
  }

  console.log(review)

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 gap-6 py-8">
      <Code reviewCode={submitCode} />
      <div className="grid grid-cols-1 gap-4">
        <BigO data={review?.bigO} />
        <Security data={review?.security} />
        <Readability data={review?.readability} />
        <Performance data={review?.performance} />
        <Bugs data={review?.bugs} />
      </div>
    </section>
  )
}
