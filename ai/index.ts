import { LLMChain } from "langchain/chains"
import { OpenAI } from "langchain/llms/openai"
import { PromptTemplate } from "langchain/prompts"
import { z } from "zod"

function createPrompt() {
  const template = `
Act as the best software engineer in the world helping a developer review his code.
Please deep analyse the following code in terms of Big O notation, security, bugs, readability, and performance.

Provide the response in JSON format with this structure all keys are mandatory:

{{
  bigO: {{ time: string, space: string }},
  security: string,
  bugs: string,
  readability: string,
  performance: string,
}}

Do NOT output any text other than the JSON

CODE: {code}`

  try {
    return new PromptTemplate({
      template: template,
      inputVariables: ["code"],
    })
  } catch (e) {
    console.error("Something went wrong creating the prompt", e)
  }
}

function buildModel() {
  try {
    return new OpenAI({
      modelName: "gpt-3.5-turbo",
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.9,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      maxTokens: 1024,
      n: 1,
    })
  } catch (e) {
    console.error("Something went wrong building the model", e)
  }
}

const outSchema = z.object({
  bigO: z.object({
    time: z.string().nullable(),
    space: z.string().nullable(),
  }),
  security: z.nullable(z.string().nullable()),
  bugs: z.string().nullable(),
  readability: z.string().nullable(),
  performance: z.string().nullable(),
})

export type TOut = z.TypeOf<typeof outSchema>

function parseResponse(aiResponse: string): TOut {
  return JSON.parse(aiResponse)
}

function mockAiReviewResponse(): Promise<TOut | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
    }, 5000)

    setTimeout(() => {
      resolve(undefined)
    }, 3000)
  })
}

const prompt = createPrompt()
// console.log("prompt - ", prompt)

const llm = buildModel()

export async function aiReview(code: string): Promise<TOut | undefined> {
  "use server"

  try {
    // return mockAiReviewResponse()

    if (!prompt || !llm) {
      return
    }

    const chain = new LLMChain({ llm, prompt })

    const res = await chain.call({ code })
    // console.log("result - ", res)

    const out = parseResponse(res.text)

    console.info({
      message: "Successful completion",
      code,
      out,
    })
    return out
  } catch (e) {
    console.error("Something went wrong in the AI review", e)
  }
}
