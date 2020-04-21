import React,{Component} from 'react';
import CrudForm from './components/CrudForm/CrudForm';
import CrudList from './components/CrudList/CrudList'

class App extends Component {
  state ={
    courses:[
      {name:"Html"},
      {name:"CSS"},
      {name:"JavaScript"},
      {name:"Jquery"}

    ],
    current : ''
  }
  
  updateCourse =(e)=>{
    this.setState({
      current:e.target.value
    })
  
  }
  addCourse=(e)=>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if(e.target.name.value ==='') {
      return false;
      
    }else{
    courses.push({name:current});
    this.setState({
      courses,
      current:''
    })
  }
  }
  deleteCourse =(index)=>{
    // console.log(index);
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }
  editCourse = (index,value )=>{
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })

  }
render(){
  const {courses}=this.state;
  let length=courses.length;
  const courseList= length ? (courses.map((course,index) =>{
    return (
      <CrudList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    )
  })
):(
  <p>There is no courses to show</p>
)

  return (
   
    <section className="App">
   <h2>Add Course</h2>
   <CrudForm current ={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
  <ul>{courseList}</ul>
    </section>
  );
}
}

export default App;
