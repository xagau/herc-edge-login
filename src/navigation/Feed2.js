import React, { Component } from 'react';

class Feed2 extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }

  componentWillMount(){
    console.log("Feed2 Mounted!")
    this.setState({projects:[
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  render() {
    let projectItems;
    if(this.state.projects.length){
      projectItems = this.state.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} projectitem={project}/>
        )
      });
    }

    return(
      <div>
      <h3>Latest Projects</h3>
        {projectItems}
      </div>
    )
  }
}

export default Feed2;
