import React from 'react'

const Course = ({ course, deleteCourse, editCourse }) => {
  return (
    <tr key={course.id}>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.date}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.courseName}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.userScore}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.yardage}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.par}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.courseRating}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.courseSlope}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.courseHandicap}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.fairways}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.gir}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.ud}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className= "text-small text-gray-500">{course.putts}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                        <a 
                        onClick ={(e, id) => editCourse(e, course.id )}
                        className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">
                        Edit</a>
                        <a 
                            onClick={(e, id) => deleteCourse(e,course.id)}
                            className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                            Delete</a>
                    </td>
                </tr>
  );
};

export default Course;