import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
         <form onSubmit={props.submit}>
        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)}/>
            <br />
            </label>

        <label>
            Employee Name:
            <input type="text" name="employee" required onChange={(event) => props.change(event)}/>

          </label>
          <br />

          <label>
            Employee Number:
            <input type="text" name="employeeNum" required onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
