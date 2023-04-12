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

### git

Git:
git init
git remote add origin https://github.com/qzhongmun/mocha.git
git branch -M main
git add .
git push -u origin main

git remote add origin https://github.com/qzhongmun/mocha.git
git pull --rebase origin main

git remote add master https://github.com/qzhongmun/mocha.git
git push origin master
git —version
Git stash
git clone url
git branch -M master
git checkout master
git remote remove origin //delete existed .git
git add .
git commit -m 'your message'
git push
git push origin master
git remote -v
git branch
git add .
git commit -m "new commit"
git push origin master
git remote -v
git remote origin set-url https://github.com/qzhongmun/React_Pros.git
git remote set-url origin https://github.com/qzhongmun/React_Pros.git
git push origin master
git init
git clone url
git add .
git commit -m 'your message'
git remote add origin url
git push
git push --set-upstream origin master
