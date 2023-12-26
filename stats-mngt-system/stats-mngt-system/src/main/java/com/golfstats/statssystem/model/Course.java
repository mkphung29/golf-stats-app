package com.golfstats.statssystem.model;

public class Course {
    private long id;
    private String courseName;
    private String date;
    private float userScore;
    private int yardage;
    private int par;
    private float courseRating;
    private float courseSlope;
    private float courseHandicap;
    private int fairways;
    private int gir;
    private int ud;
    private int putts;

    public Course(long id, String courseName, String date, float userScore, int yardage, int par, float courseRating, float courseSlope, float courseHandicap, int fairways, int gir, int ud, int putts) {
        this.id = id;
        this.courseName = courseName;
        this.date = date;
        this.userScore = userScore;
        this.yardage = yardage;
        this.par = par;
        this.courseRating = courseRating;
        this.courseSlope = courseSlope;
        this.courseHandicap = courseHandicap;
        this.fairways = fairways;
        this.gir = gir;
        this.ud = ud;
        this.putts = putts;
    }

    public Course() {
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public float getUserScore() {
        return userScore;
    }

    public void setUserScore(float userScore) {
        this.userScore = userScore;
    }

    public int getYardage() {
        return yardage;
    }

    public void setYardage(int yardage) {
        this.yardage = yardage;
    }

    public int getPar() {
        return par;
    }

    public void setPar(int par) {
        this.par = par;
    }

    public float getCourseRating() {
        return courseRating;
    }

    public void setCourseRating(float courseRating) {
        this.courseRating = courseRating;
    }

    public float getCourseSlope() {
        return courseSlope;
    }

    public void setCourseSlope(float courseSlope) {
        this.courseSlope = courseSlope;
    }

    public float getCourseHandicap() {
        return courseHandicap;
    }

    public void setCourseHandicap(float courseHandicap) {
        this.courseHandicap = courseHandicap;
    }

    public int getFairways(){
        return fairways;
    }

    public void setFairways(int fairways){
        this.fairways = fairways;
    }

    public int getGir(){
        return gir;
    }

    public void setGir(int gir){
        this.gir = gir;
    }

    public int getUd(){
        return ud;
    }

    public void setUd(int ud){
        this.ud = ud;
    }

    public int getPutts(){
        return putts;
    }

    public void setPutts(int putts){
        this.putts = putts;
    }

}
