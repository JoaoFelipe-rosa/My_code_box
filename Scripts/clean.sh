# find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
rm -rf node_modules
rm -rf ./**/*/node_modules
rm -rf ./applications/*/build