const withImages = require('next-images')
// module.exports = withImages()
module.exports = {
    distDir: 'build',
    target: 'serverless',
}
module.exports = withImages();