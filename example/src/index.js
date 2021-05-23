import dva from 'dva';
import './index.html';
import './styles/index.less';
import './cardsconfig';

// 1. Initialize
const app = dva();

app.model(require("./models/app"));
app.model(require("./models/home"));
app.model(require("./models/hearts/heart2"));
app.model(require("./models/hearts/heart3"));
app.model(require("./models/spades/spade2"));
app.model(require("./models/clubs/club2"));
app.model(require("./models/clubs/club6"));
app.model(require("./models/clubs/club7"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
