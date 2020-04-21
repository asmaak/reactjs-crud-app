import React from 'react';


const CrudForm =(props)=> {
  
  
  return (
    <form onSubmit={props.addCourse}>
<input type="text" name="name" value={props.current} onChange={props.updateCourse}/>
<button type="submit">Add Course</button>
    </form>
  );
}

export default CrudForm;
