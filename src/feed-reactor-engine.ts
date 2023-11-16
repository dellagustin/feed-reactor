import { FeedDatabase } from "./feed-reactor-database-interface";

export class FeedReactorEngine {

	private feedDatabase: FeedDatabase;
	
	constructor(feedDatabase: FeedDatabase) {
		this.feedDatabase = feedDatabase;
	}

	async addFeed(feedUrl: URL): Promise<void> {
		return this.feedDatabase.insertFeed(feedUrl);
	}

	async run() {

	}

	addNewEpisodeReactor() {

	}
}