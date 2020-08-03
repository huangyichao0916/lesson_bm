import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello';

ReactDOM.render(
    <HelloComponent userName='hcy' />,
    document.getElementById('root')
)