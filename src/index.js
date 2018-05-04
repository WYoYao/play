import dva from 'dva';
import './index.css';
import 'antd/dist/antd.less';  // or 'antd-mobile/dist/antd-mobile.less'
import './utils/rem.js'

// 1. Initialize
const app = dva();

app.model(require("./models/login"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
