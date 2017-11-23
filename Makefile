install:
	npm install

start:
	npm run babel-node -- src/bin/brain-progression.js

publish:
	npm publish

make lint:
	npm run eslint .
