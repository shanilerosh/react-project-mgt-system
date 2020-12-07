import { connect } from "react-redux";

const { Component } = require("react");
const { default: ProjectList } = require("../project/ProjectList");
const { default: Notification } = require("./Notification");

class Dashboard extends Component {
    render(){
        const {projects} = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
            </div>
        )
    }
}

const addToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(addToProps)(Dashboard);