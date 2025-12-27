import { AgentTool, LlmAgent } from "@google/adk"

export const flightAgent = new LlmAgent({
    model: 'gemini-2.5-flash',
    name: 'flight_agent',
    description: 'Flight Agent',
    instruction: `
        You are to find 4 best flights sorted by time in flight & price between 'to' & 'from' cities.
        Show flights with airline company, time in flight, both airport & price in USD
    `
});

export const placesOfInterestAgent = new LlmAgent({
    model: 'gemini-2.5-flash',
    name: 'places_of_interest',
    description: 'Places of interest agent',
    instruction: `
        You are to find 5 most interesting places in the destination
        around the place of stay which are within walking distance & 
        5 other events that happen during that period of stay in the city.

        Show the list of 5 items with name & walking distance from place of stay.
        Show the list of 5 events with name & whats interesting about the event with date of event 
        & walking distance from place of stay & also the cost of entry if there is any in USD.
    `
})

export const dietAgent = new LlmAgent({
    model: 'gemini-2.5-flash',
    name: 'diet_agent',
    description: 'Diet Agent',
    instruction: `
        You are to find 5 lunch places and 5 dinner places that match their food they like with range of cost per person.
    `
});

export const rootAgent = new LlmAgent({
    model: 'gemini-2.5-flash',
    name: 'root_agent',
    description: 'Main root agent',
    instruction: `
        You are a helpful Travel & Expense planner.
        User will provide to & from cities with start date & return date.
        If they don't provide all four variables - ask user for missing info until all information is provided.

        Once you have all information - forward all the variables provided to 'flight_agent' tool, 
        present the information provided by the tool to the user. And after the response has been provided 
        ask where are they staying when they are at the destination city?

        Once you have provided information from flight agent, ask them for hotel or place of stay in destination.

        forward all the variables again to 'places_of_interest' agent tool and present the information 
        provided by the tool to the user. And after that ask user what type of food they prefer?

        Forward all the information to 'diet_agent' agent tool and present the information provided by tool
        to the user.
    `,
    tools: [
        new AgentTool({
            agent: flightAgent
        }),
        new AgentTool({
            agent: placesOfInterestAgent
        }),
        new AgentTool({
            agent: dietAgent
        })
    ]
})