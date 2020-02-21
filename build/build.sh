# build js
set -e
yarn build
cd packages/themes
set -e
yarn build
