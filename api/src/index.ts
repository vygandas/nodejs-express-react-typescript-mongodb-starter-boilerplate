import App from './App';

const port: number = parseInt(process.env.PORT) || 3000;

App.listen(port, (error?: Error) => {
    if (error) {
        return console.log(error);
    }

    return console.log(`server is listening on ${port}`);
});