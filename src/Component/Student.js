import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
const Student = () => {
    return (
        <>
            <div className="box4 my-5 ">
                <h1 className='student'>Academic Activities & Examination Monitoring System</h1>
                <div className="row main2">
                    <div className="col-2"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>Student</div></div>
                    <div className="col-2"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>College/Exam Center</div></div>
                    <div className="col-2"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>Result</div></div>
                    <div className="col-2"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>Complain</div></div>
                    <div className="col-2"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>E-Content</div></div>
                </div>

                <div className="row main3">
                    <div className="col-4"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>Admission/Campus Entrance</div></div>
                    <div className="col-4"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>Teacher Registration For Examination</div></div>
                    <div className="col-4"> <FontAwesomeIcon className="icons" icon={faTrophy} /><div>Learning Management System</div></div>

                </div>

            </div>
        </>
    )
}

export default Student
