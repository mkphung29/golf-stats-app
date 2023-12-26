package com.golfstats.statssystem.controller;

import com.golfstats.statssystem.model.Course;
import com.golfstats.statssystem.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService){
        this.courseService = courseService;
    }

    @PostMapping("/courses")
    public Course saveCourse(@RequestBody Course course){
        return courseService.saveCourse(course);
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses(){
        return courseService.getAllCourses();
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long id){
        Course course = null;
        course = courseService.getUserById(id);
        return ResponseEntity.ok(course);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Object> deleteCourse(@PathVariable("id") Long id){
        boolean deleted = false;
        deleted = courseService.deleteCourse(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable("id") Long id,
                                               @RequestBody Course course){
        course = courseService.updateCourse(id, course);
        return ResponseEntity.ok(course);

    }
}
