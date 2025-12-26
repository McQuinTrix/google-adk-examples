import { AgentTool, LlmAgent } from "@google/adk";

const summaryAgent = new LlmAgent({
    model: 'gemini-2.5-flash',
    name: 'summary_agent',
    description: 'Summary Agent',
    instruction: `
        You are expert summarizer. Please read the text provided & give a concise summary.
    `
})

export const rootAgent = new LlmAgent({
    model: 'gemini-2.5-flash',
    name: 'root_agent',
    description: 'Main root agent',
    instruction: `
        You are a helpful assistant.
        When user asks you to summarize a text, use summarize tool to generate a summary,
        Always forward the user's message exactly as received to the 'summarize' tool, without modifying 
        or summarizing it yourself. Present the response from tool to the user.
    `,
    tools: [new AgentTool({
        agent: summaryAgent
    })]
})