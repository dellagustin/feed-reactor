export interface FeedDatabase {
	insertFeed(feedUrl: URL): Promise<void>;
}