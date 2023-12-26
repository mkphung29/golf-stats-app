package com.golfstats.statssystem.service;

import com.golfstats.statssystem.model.Course;
import java.util.*;

public interface CourseService {
    Course saveCourse(Course course);

    List<Course> getAllCourses();

    Course getUserById(Long id);

    boolean deleteCourse(Long id);

    Course updateCourse(Long id, Course course);
}
