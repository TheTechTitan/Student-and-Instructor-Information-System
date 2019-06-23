const mongoose = require('../models/marksModel');
const CourseModel = mongoose.model('CourseTable');
const SubjectModel = mongoose.model('SubjectTable');

const courseMarksController = function () {
    this.insertCourse = (course) => {
        return new Promise((resolve, reject) => {
            let newCourse = new CourseModel({
                name: course.name,
                courseCode: course.courseCode,
                lectureInCharge: course.lectureInCharge,
                subjects: course.subjects
            });
            const mongoose = require('../models/marksModel');
            const {ObjectID} = require("mongodb");
            const CourseModel = mongoose.model('CourseTable');
            const SubjectModel = mongoose.model('SubjectTable');

            const courseMarksController = function () {
                this.insertCourse = (course) => {
                    return new Promise((resolve, reject) => {
                        let newCourse = new CourseModel({
                            name: course.name,
                            courseCode: course.courseCode,
                            lectureInCharge: course.lectureInCharge,
                            subjects: course.subjects
                        });


                        newCourse.save().then(() => {
                            resolve({status: 200, message: "New Course is successfully added"})
                        }).catch(err => {
                            reject({status: 500, message: "Error: " + err})
                        })
                    })

                };

                this.getCourseSubjects = (code) => {
                    return new Promise((resolve, reject) => {
                        CourseModel.findOne({courseCode: code}).populate('subjects').exec().then((data) => {
                            resolve({status: 200, message: data})
                        }).catch(err => {
                            reject({status: 404, message: "Error in finding the course"})
                        })
                    })
                };

                this.getCourses = () => {
                    return new Promise((resolve, reject) => {
                        CourseModel.find().exec().then((data) => {
                            resolve({status: 200, courses: data})
                        }).catch(err => {
                            reject({status: 404, message: "Error: " + err})
                        })
                    })
                }

                this.insertCourseSubjects = (code,objID) => {
                    return new Promise((resolve, reject) => {

                        CourseModel.update({courseCode: code},{$push:{"subjects":[ObjectID(objID)]}}).then((data) => {
                            resolve({status: 200, message: data});
                        }).catch(err => {
                            reject({status: 500, message: "Error:- " + err});
                        })

                    })
                };
            };

            module.exports = new courseMarksController();

            newCourse.save().then(() => {
                resolve({status: 200, message: "New Course is successfully added"})
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })

    };

    this.getCourseSubjects = (code) => {
        return new Promise((resolve, reject) => {
            CourseModel.findOne({courseCode: code}).populate('subjects').exec().then((data) => {
                resolve({status: 200, message: data})
            }).catch(err => {
                reject({status: 404, message: "Error in finding the course"})
            })
        })
    };

    this.getCourses = () => {
        return new Promise((resolve, reject) => {
            CourseModel.find().exec().then((data) => {
                resolve({status: 200, courses: data})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }
};

module.exports = new courseMarksController();