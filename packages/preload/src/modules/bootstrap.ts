import { runCommand } from '~p/utils/command.js';
import { pressToContinue } from '~p/utils/prompt.js';

export async function startBootstrap() {
	await runCommand('echo "hello"');
	await pressToContinue('Press any key to continue...');
}
