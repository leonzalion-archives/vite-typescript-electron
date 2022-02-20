import process from 'node:process';
import execa from 'execa';

const message = process.argv.at(-1);

if (message === undefined) {
	throw new Error('No message provided.');
}

try {
	execa.sync('pnpm', ['exec', 'commitlint', '--edit', message], {
		stdio: 'inherit',
	});
} catch {
	process.exit(1);
}
