import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "components/Home/Home";
import Sorting from "components/Sorting/Sorting";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sorting" component={Sorting} />
            </Switch>
        </Router>
    );
};

export default App;
