import Link from "next/link"

export default function About() {
  return (
    <>
      <section className="container grid items-center gap-6 pt-6 md:py-10">
        <div className="flex">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              ✨ (alpha) AI-powered code analysis.
              <br className="hidden sm:inline" />
              Analyse your code and unlock its potential.
            </h1>
          </div>
        </div>
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Hey there! 👋🏼 Thanks for checking this out! Just a heads up, the app
            is currently in alpha, so use it at your own risk. I&apos;m working
            hard (cof cof) 😅 to make it better and more stable, but there may
            still be some bugs 🐛 and issues I haven&apos;t discovered yet. If
            you encounter any problems, let me know so we can fix them 🔨!
          </p>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Acknowledgments
          </h2>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;I&apos;s a great time to be a developer!&quot;
          </blockquote>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    Who
                  </th>
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    What
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    <Link href="https://vercel.com/solutions/nextjs">
                      Vercel
                    </Link>
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Hosting
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    <Link href="https://nextjs.org/">NextJS</Link>
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Framework
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    <Link href="https://ui.shadcn.com/">shadcn/ui</Link>
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Component library (UI/UX)
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    <Link href="https://js.langchain.com/docs/">LangChain</Link>
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    LLM Framework
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    <Link href="https://openai.com/">OpenAI</Link>
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    LLM Model
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            A lot of stuff can go wrong 🤯
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This project was built in one day (literally) so a lot of
            &quot;bad&quot; things can and will happen, feel free to help
            improve by checking the GitHub issues (tackling them or creating new
            ones) 💪🏼. Here are some I expect to happen at this stage
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              My credits in openAI run out (I will add the feature to use your
              own API key)
            </li>
            <li>The AI returns an unexpected response</li>
          </ul>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Hope for the best😅
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            About Me
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Well, you can get to know me{" "}
            <Link href="https://luis-oliveira.vercel.app/">here.</Link>. I just
            got into AI 🐑 and that&apos;s the why of this 😊
          </p>
        </div>
      </section>
      <section className="container inset-x-0 bottom-0 flex items-center justify-center p-4">
        <p className="text-xs text-muted-foreground">
          © 2023 Luis Oliveira. All rights reserved.
        </p>
      </section>
    </>
  )
}
