```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CrewList from './components/CrewList';
import CrewDetail from './components/CrewDetail';
import ShipList from './components/ShipList';
import ShipDetail from './components/ShipDetail';
import AssignmentList from './components/AssignmentList';
import AssignmentDetail from './components/AssignmentDetail';
import AssignmentCreate from './components/AssignmentCreate';
import AssignmentEdit from './components/AssignmentEdit';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import CrewProfile from './components/CrewProfile';
import CrewProfileEdit from './components/CrewProfileEdit';
import Alert from './components/Alert';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Alert />
      <Switch>
        <Route path="/crew/:id" component={CrewDetail} />
        <Route path="/crew" component={CrewList} />
        <Route path="/ship/:id" component={ShipDetail} />
        <Route path="/ship" component={ShipList} />
        <Route path="/assignment/edit/:id" component={AssignmentEdit} />
        <Route path="/assignment/create" component={AssignmentCreate} />
        <Route path="/assignment/:id" component={AssignmentDetail} />
        <Route path="/assignment" component={AssignmentList} />
        <Route path="/dashboard" component={AnalyticsDashboard} />
        <Route path="/profile/edit" component={CrewProfileEdit} />
        <Route path="/profile" component={CrewProfile} />
        <Route path="/" component={CrewList} />
      </Switch>
    </Router>
  );
}

export default App;
```