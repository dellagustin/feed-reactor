import { Command } from "commander";
import { FeedReactorEngine } from "./feed-reactor-engine";
import { JsonFileFeedDatabase } from "./feed-reactor-json-database";

function createEngine(): FeedReactorEngine {
	const feedDatabase = new JsonFileFeedDatabase('./');

	return new FeedReactorEngine(feedDatabase);
}

export async function addFeed(feedUrl: string, options: any, command: Command) {
	const feedReactorEngine = createEngine()
	let parsedFeedUrl;

	try {
		parsedFeedUrl = new URL(feedUrl);
		await feedReactorEngine.addFeed(parsedFeedUrl);
	}
	catch (e: any) {
		command.error(`Error: ${e.message}`);
	}
}