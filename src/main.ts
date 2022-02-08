import Discord from "discord.js";
import {argumentParse, isValid} from "./args";
import iceBreak from "./icebreaker";

const token = "YOURTOKEN"; // or pass it through an environment variable(much safer)
const trigger = "&";

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]});

client.on("ready", _ => {

	console.log(`started bot. Logged in as ${client.user?.tag}`);

})

client.on("messageCreate", (e: Discord.Message) => {

	let args: String[] = argumentParse(e.content);
	let is_valid: boolean = isValid(args[0], trigger);

	if (!is_valid) {

		return

	}
	
	const response = (args[1] === "casual") ? iceBreak(true) : iceBreak();
	e.channel.send(response);

})

client.login(token);
