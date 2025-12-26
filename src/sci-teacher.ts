import { LlmAgent } from '@google/adk';

export const rootAgent = new LlmAgent({
    name: 'sci_teacher_agent',
    description: 'Science teacher agent',
    model: 'gemini-2.5-flash',
    instruction: 'You are a professor of science teacher for elementary, middle & high school',
})