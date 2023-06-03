import { aiReview, type TOut } from "@/ai"

import { ReadMe } from "@/components/Home/readMe"
import { ReviewArea } from "@/components/Home/reviewArea"

export default function Home() {
  async function reviewCode(code: string): Promise<TOut | undefined> {
    "use server"
    return aiReview(code)
  }

  return (
    <>
      <section className="container grid items-center gap-6 pt-6 md:py-10">
        <div className="flex flex-col sm:flex-row">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              ✨ AI-powered code analysis.
              <br className="hidden sm:inline" />
              &nbsp;Analyze your code and unlock its potential.
            </h1>
          </div>
          <div className="mx-auto pt-4 sm:pt-0">
            <ReadMe />
          </div>
        </div>
      </section>
      <ReviewArea reviewCode={reviewCode} />
      <section className="container inset-x-0 bottom-0 my-4 flex items-center justify-center p-4 sm:fixed">
        <p className="text-xs text-muted-foreground">
          © 2023 Luis Oliveira. All rights reserved.
        </p>
      </section>
    </>
  )
}
