export function argumentParse(content: String): String[] {

	let args: String[] = content.trim().split(" ");
	return args;

}

export function isValid(text: String, trigger: String): boolean {

	return text === trigger + "icebreak";

} 
