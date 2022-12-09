// * import express application
import app from './app';

/* ----------------------------- listen on port ----------------------------- */
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('listening on port ' + port);
});