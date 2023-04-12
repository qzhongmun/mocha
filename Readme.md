### start

mkdir mochatest
cd mochatest
npm init
npm i -D mocha chai

### change a little bit in package.json

test: "mocha || true"

"-s" and "|| true" has same function, only show important info in terminal

### run

npm run test -s

### resource

come from Traversy Media

https://www.youtube.com/watch?v=MLTRHc5dk6s

### Git

git init

git remote add origin https://github.com/qzhongmun/mocha.git

git branch -M main

git add .

git commit -m "first commit"

git push -u origin main
