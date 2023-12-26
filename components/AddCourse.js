import { Dialog, Transition } from '@headlessui/react';
import React from 'react'
import { Fragment, useState, useEffect } from "react";
import CourseList from "../components/CourseList";

const AddCourse = () => {
    const COURSE_BASE_URL = "http://localhost:8080/api/v1/courses";
    const [isOpen, setIsOpen] = useState(false);
    const [course,setCourse]  = useState({
        id : "",
        courseName : "",
        date : "",
        userScore : "",
        yardage : "",
        par : "",
        courseRating : "",
        courseSlope : "",
        courseHandicap : "",
        fairways : "",
        gir : "",
        ud : "",
        putts : "",
    });

    const [responseCourse, setResponseCourse] = useState({
        id : "",
        courseName : "",
        date : "",
        userScore : "",
        yardage : ", ",
        par : "",
        courseRating : "",
        courseSlope : "",
        courseHandicap : "",
        fairways : "",
        gir : "",
        ud : "",
        putts : "",
    });

    function closeModal(){
        setIsOpen(false);
    }

    function openModal(){
        setIsOpen(true);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setCourse({ ...course, [event.target.name]: value});
    };

    const saveCourse = async (e) => {
        e.preventDefault();
        const response = await fetch(COURSE_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(course),
        });
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        const _course = await response.json();
        setResponseCourse(_course);
        reset(e);
    };

    const reset = (e) => {
        e.preventDefault();
        setCourse({
            id : "",
            courseName : "",
            date : "",
            userScore : "",
            yardage : ", ",
            par : "",
            courseRating : "",
            courseSlope : "",
            courseHandicap : "",
            fairways : "",
            gir : "",
            ud : "",
            putts : "",
        });
        setIsOpen(false);
    };

  return ( 
    <>
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button onClick={openModal} 
                className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                 Add Round</button>
            </div>
        </div>
    <Transition appear show={isOpen} as ={Fragment}>
        <Dialog 
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}>
            <div className="min-h-screen px-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                    <Dialog.Title 
                    as="h3" 
                    className="text-lg font-medium leading-6 text-gray-900">
                    Add new Round
                    </Dialog.Title>
                    <div className="flex max-w-md max-auto">
                        <div className="py-2">
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Course Name
                                </label>
                                <input 
                                type="text" 
                                name="courseName" 
                                value={course.courseName} 
                                onChange= {(e) => handleChange(e)}
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Date
                                </label>
                                <input type="text" 
                                name="date" 
                                value={course.date}
                                onChange= {(e) => handleChange(e)} 
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Score
                                </label>
                                <input type="text"
                                 name="userScore"
                                 value={course.userScore} 
                                 onChange= {(e) => handleChange(e)}
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Yardage
                                </label>
                                <input type="text"
                                 name="yardage"
                                 value={course.yardage}
                                 onChange= {(e) => handleChange(e)} 
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Par
                                </label>
                                <input type="text"
                                 name="par"
                                 value={course.par} 
                                 onChange= {(e) => handleChange(e)}
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Course Rating
                                </label>
                                <input type="text"
                                 name="courseRating"
                                 value={course.courseRating}
                                 onChange= {(e) => handleChange(e)} 
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Course Slope
                                </label>
                                <input type="text" 
                                name="courseSlope" 
                                value={course.courseSlope} 
                                onChange= {(e) => handleChange(e)}
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Course Handicap
                                </label>
                                <input type="text"
                                 name="courseHandicap" 
                                 value={course.courseHandicap} 
                                 onChange= {(e) => handleChange(e)}
                                 className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Number of Fairways
                                </label>
                                <input type="text"
                                 name="fairways" 
                                 value={course.fairways} 
                                 onChange= {(e) => handleChange(e)}
                                 className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Number of Greens in Regulation
                                </label>
                                <input type="text"
                                 name="gir" 
                                 value={course.gir} 
                                 onChange= {(e) => handleChange(e)}
                                 className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Number of Up and Downs
                                </label>
                                <input type="text"
                                 name="ud" 
                                 value={course.ud} 
                                 onChange= {(e) => handleChange(e)}
                                 className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4">
                                <label className="block text-gray-600 text-sm font-normal">
                                    Number of Putts
                                </label>
                                <input type="text" 
                                name="putts" 
                                value={course.putts} 
                                onChange= {(e) => handleChange(e)}
                                className="h-10 w-96 border mt-2 px-2 py-2"></input>
                            </div>
                            <div className="h-14 my-4 space-x-4 pt-4">
                                <button onClick={saveCourse} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">Save</button>
                                <button onClick={reset} className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition>
    <CourseList course={responseCourse} />
    </>
  );
};

export default AddCourse