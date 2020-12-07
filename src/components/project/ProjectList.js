import ProjectSummary from "./ProjectSummary";

const ProjectList = ({projects})=> {
    return (
        <div className="project-list section">
            {projects && projects.map(pjt=> {
                return(
                    <ProjectSummary project={pjt} key={pjt.id}/>
                ) ;
            })}
        </div>
    );
}

export default ProjectList;