package com.golfstats.statssystem.service;

import com.golfstats.statssystem.entity.CourseEntity;
import com.golfstats.statssystem.model.Course;
import com.golfstats.statssystem.repository.CourseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.*;

import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{

    private final CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public Course saveCourse(Course course) {
        CourseEntity courseEntity = new CourseEntity();
        BeanUtils.copyProperties(course, courseEntity);
        courseRepository.save(courseEntity);
        return course;
    }

    @Override
    public List<Course> getAllCourses() {
        List<CourseEntity> courseEntities = courseRepository.findAll();

        List<Course> courses = courseEntities
                .stream()
                .map(courseEntity -> new Course(
                        courseEntity.getId(),
                        courseEntity.getDate(),
                        courseEntity.getCourseName(),
                        courseEntity.getUserScore(),
                        courseEntity.getYardage(),
                        courseEntity.getPar(),
                        courseEntity.getCourseRating(),
                        courseEntity.getCourseSlope(),
                        courseEntity.getCourseHandicap(),
                        courseEntity.getFairways(),
                        courseEntity.getGir(),
                        courseEntity.getUd(),
                        courseEntity.getPutts()

                ))
                .collect(Collectors.toList());

        return courses;
    }

    @Override
    public Course getUserById(Long id) {
        CourseEntity courseEntity
                = courseRepository.findById(id).get();
        Course course = new Course();
        BeanUtils.copyProperties(courseEntity, course);
        return course;
    }

    @Override
    public boolean deleteCourse(Long id) {
        CourseEntity course = courseRepository.findById(id).get();
        courseRepository.delete(course);
        return true;
    }

    @Override
    public Course updateCourse(Long id, Course course) {
        CourseEntity courseEntity =
                courseRepository.findById(id).get();
        courseEntity.setCourseName(course.getCourseName());
        courseEntity.setCourseRating(course.getCourseRating());
        courseEntity.setCourseHandicap(course.getCourseHandicap());
        courseEntity.setCourseSlope(course.getCourseSlope());
        courseEntity.setDate(course.getDate());
        courseEntity.setFairways(course.getFairways());
        courseEntity.setGir(course.getGir());
        courseEntity.setPar(course.getPar());
        courseEntity.setPutts(course.getPutts());
        courseEntity.setUd(course.getUd());
        courseEntity.setUserScore(course.getUserScore());
        courseEntity.setYardage(course.getYardage());

        courseRepository.save(courseEntity);
        return course;

    }
}
