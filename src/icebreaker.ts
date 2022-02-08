import { ci } from "./casual_icebreakers";

const responses: {[index: string]: string[]} = {

	"basic_questions": [
	
	"What aspect of your personality adds the most value to the world?",
	"What is something that you feel proud of this week?",
	"What is the best piece of advice you have ever gotten at work?",
	"Describe yourself in one word?",
	"If you could immediately gain one skill, what would it be?",
	"What do you think the most important thing is for a workplace to have?",
	"What are your skills, experience, assets and resources?", 
	"What life experience has made you who you are today?", 
	"Why have you chosen to work in this industry?",
	"What do others say about you?", 
	"What experiences strengthen and empower you?",
	"What experiences challenge you", 
	"Who do you want to be in the future? How do you get there?",
	"Who are you not? What strategic partners or suppliers could complete you?",
	"What things you would never tell a clients? Why?",
	"Who is your ideal client(occupation, nationality, age)?",
	`How do you imagine you client's ${randQuality()}`,
	"What do you feel is something that everyone is missing out on because they simply do not know about it?",
	"What’s the most important thing to remember daily that you haven’t been able to?",
	"What help could you most use that you haven’t asked for?",
	"What simple thing still blows your mind?",
	"What’s one thing you want to do in life, but don’t know where to start?",
	"Do you work better with or without music? What are you listening to while you work?",	
	"What’s something you’ve drawn inspiration from recently",
	"What is something that's noteworthy for you when you're learning a new skill?"
	
	],

	"where_questions": [

		`Where do you see yourself ${randTime()}?`,
		`Where do you see your client ${randTime()}?`,
		`Where do you see the competition ${randTime()}?`,
		`Where do you see the product ${randTime()}?`
	],

	"how_questions": [
		
		"How do you keep yourself physically and mentally healthy?",
		"How do you communicate with the client?",
		"How do you tackle the current competition?",
		"How do you do approach the product?",
		"How do you improve yourself?",
		"How do you like to brainstorm? What methods are most effective?",
		"How would you make your week the most productive it can be?",
		"Are there any aspects of your personality that hold you back? How do you adapt?"
	],
	
	"how_much_questions": [

		"How much output do you expect from yourself?",
		"How much effort do you expect from your client?",
		"How much expectations do you have for the product?",
		"How much advancement do you expect will come over the competition and in how much time?"
	],
}

export default function iceBreak(casual?: boolean): string {
	
	if (casual) {
	
		return ci[Math.floor(Math.random() * ci.length)];

	}

	const keys: string[] = Object.keys(responses);
	const randomKey: string = keys[Math.floor(Math.random() * keys.length)];

	const resp_array = responses[randomKey];

	return resp_array[Math.floor(Math.random() * resp_array.length)];

}

function randQuality(): string {

	const options = ["values", "beliefs", "goals"];	
	return options[Math.floor(Math.random() * options.length)];

}

function randTime(): string {

	const options = ["now", "in a few years"];
	return options[Math.floor(Math.random() * options.length)];

}
