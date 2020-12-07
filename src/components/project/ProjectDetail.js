import React from 'react'

const ProjectDetail = (props) => {
    return (
        <div className="container section project-details">
            <div className="card">
                <div className="car z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{props.match.params.id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi labore illum doloremque nihil fugiat facere hic est aliquid magni nobis vel error tempore, dolore ullam in eius fuga a? Perspiciatis.</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <div>Posted by net ninja</div>
                        <div>2nd of September 2 am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
