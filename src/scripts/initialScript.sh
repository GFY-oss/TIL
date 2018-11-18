cd ..
git clone "https://$GITHUB_API@github.com/$REPO"
ls
./TIL/src/scripts/pusherFolderVerifier.sh
mv ./TIL/public "til-sites/$pusher"
cd til-sites
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git add .
git commit --message 'Travis build by '$pusher
git remote add origin-pages https://${GITHUB_API}@github.com/$REPO
git push --quiet --set-upstream origin-pages master
