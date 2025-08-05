import OpenAI from "openai";

export default {
	async fetch(request, env, ctx) {
		const openai = new OpenAI({
			apiKey: env.OPENAI_API_KEY
		})

		try {
			const chatCompletion = await openai.chat.completions.create({
				model: 'gpt-4',
				messages: [],
				temperature: 1.1,
				presence_penalty: 0,
				frequency_penalty: 0
			})
			return new Response('Hello from my OpenAI API Worker!');
		} catch(e) {

		}
	},
};
