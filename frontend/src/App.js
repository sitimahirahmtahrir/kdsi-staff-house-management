import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MaintenanceRequestForm from './components/MaintenanceRequestForm';
import GuestManagement from './components/GuestManagement';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/maintenance-request">Maintenance Request</Link></li>
                        <li><Link to="/guest-management">Guest Management</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/maintenance-request" component={MaintenanceRequestForm} />
                    <Route path="/guest-management" component={GuestManagement} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;