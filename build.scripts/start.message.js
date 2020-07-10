import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import middleware from 'webpack-dev-middleware';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(middleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
    if (err) {
        // eslint-disable-next-line no-console
        console.log(err);

    } else {
        open('http://localhost:' + port);
    }
});