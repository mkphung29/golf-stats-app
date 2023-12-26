import { React, useState, useEffect } from 'react'; 
import EditCourse from "../components/EditCourse";
import Course from '../components/Course';

const CourseList = ({ course }) => {
    const COURSE_BASE_URL = "http://localhost:8080/api/v1/courses";
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [courseId, setCourseId] = useState(null);
    const [responseCourse, setResponseCourse] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try{
            const response = await fetch(COURSE_BASE_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const courses = await response.json();
            setCourses(courses);
        }catch (error){
            console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, [course, responseCourse]);

    const deleteCourse = (e, id) => {
        e.preventDefault();
        fetch(COURSE_BASE_URL + "/" + id, {
            method: "DELETE",
        }).then((res) => {
            if (courses){
                setCourses((prevElement) => {
                    return prevElement.filter((course) => course.id != id);
                });
            }
        });
    };

    const editCourse = (e, id) => {
        e.preventDefault();
        setCourseId(id);
    };
    
  return (
    <>
  <div className="container ml-auto mr-auto my-8 overflow-x-auto">
    <div className= "flex shadow border-b">
        <table className="max-width-full">
            <thead className="bg-gray-50">
                <tr>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-4">Course Name</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Date</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Score</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Yardage</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Par</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Course Rating</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Course Slope</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Course Handicap</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Fairways</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">GIR</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Up and Downs</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Putts</th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Actions</th>
                </tr>
            </thead>
            {!loading && (
                <tbody className="bg-white">
                    {courses?.map((course) => (
                        <Course 
                            course={course} 
                            key={course.id} 
                            deleteCourse={deleteCourse} 
                            editCourse={editCourse} 
                        />
                    ))}
            </tbody>
            )}
        </table>
    </div>
  </div>
  <EditCourse courseId={courseId} setResponseCourse= {setResponseCourse} />
  </>
  );
};

export default CourseList;