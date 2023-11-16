import { FeedDatabase } from "./feed-reactor-database-interface";
import fs from 'fs/promises'

export class JsonFileFeedDatabase implements FeedDatabase {
	private static FILE_NAME_FEEDS = 'feeds.json'; 
	
	private basePath: string;

	constructor(basePath: string) {
		this.basePath = basePath;
	}
	
	async insertFeed(feedUrl: URL): Promise<void> {
		const fullFilePath = this.buildFullFilePath(JsonFileFeedDatabase.FILE_NAME_FEEDS);
		const feedUrlString = feedUrl.toString();

		let feeds: any;

		try {
			const fileContent = await fs.readFile(fullFilePath, {encoding: 'utf-8'});
			feeds = JSON.parse(fileContent);
		}
		catch(e) {
			feeds = {
				version: 1,
				feeds: []
			}
		}

		const feed = feeds.feeds.find((itemFeed: any) => itemFeed.url === feedUrlString);

		if(!feed) {
			feeds.feeds.push({
				url: feedUrl.toString()
			})
	
			await fs.writeFile(fullFilePath, JSON.stringify(feeds, null, 2));
		}
		else {
			throw Error(`The feed URL ${feedUrlString} already exists in the database`);
		}
	}

	private buildFullFilePath(fileName: string): string {
		return this.basePath + fileName;
	}
}