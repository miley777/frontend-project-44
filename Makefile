install:
	npm ci
make brain-games:
	node bin/games/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .