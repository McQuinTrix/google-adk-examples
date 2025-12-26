import { FunctionTool, LlmAgent } from "@google/adk";

const retriveByOrderId = new FunctionTool({
    name: `retriveByOrderId`,
    description: `abc`,
    parameters: {
        type: "object",
        properties: {
            orderId: { type: "string", description: "order id of product" },
            status: { type: "string" },
        },
        required: ["orderId"], 
    },
    execute: async ({ orderId }) => {
        return {
            orderId,
            status: "DELIVERED"
        }
    }
})

export const rootAgent = new LlmAgent({
    name: 'order_status_agent',
    description: 'Query the status of orders',
    model: 'gemini-2.5-flash',
    instruction: 'You are helpful order service agent - When a user asks call `retriveByOrderId` function and give status in it to user',
    tools: [retriveByOrderId]
})