const { program } = require('commander');
import { addFeed } from './feed-reactor-commands';

program
	.command('add-feed')
		.description('Adds a new feed to the configuration file')
		.argument('<feed url>', 'feed url')
		.action(addFeed)
	.command('run')
		.description('Fetch new feeds and react to changes')
	;
	
program.parseAsync();

