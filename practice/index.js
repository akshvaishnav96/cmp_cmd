import { universityData } from "./university-data.js"
// console.log(universityData.departments[0].courses[0].students);


const departmentArray = universityData.departments;
const coursesArray = departmentArray[0].courses;



function getStudentGpa() {
    const result = []

    departmentArray.map((department) => {

        department.courses.map((courses) => {

            courses.students.map((student) => {

                let assignment = (student.grades.assignments.reduce((a, b) => a + b, 0)) / student.grades.assignments.length
                assignment = (assignment * 40) / 100

                let midterm = (student.grades.midterm)
                midterm = (midterm * 30) / 100

                let final = (student.grades.final)
                final = (final * 30) / 100

                let gpa = (assignment + midterm + final) / 20;
                let studentName = student.name
                let studentId = student.studentId

                let studentResult = { name: studentName, id: studentId, gpa }

                result.push(studentResult)


            });

        })

    })

    return result
}



function scheduleCourses() {
    let result = [];

    departmentArray.map((department) => {

        department.courses.map((course) => {
            let resultData = { courseId: course.courseId, creadit: course.credits, title: course.title, schedule: course.schedule }
            result.push(resultData)

        })

    })

    return result

}


function directoryWithContact() {

    let result = [];

    departmentArray.map((department) => {
        let resultData = { departmentName: department.name, departmentId: department.id, faculty: { name: department.head.name, id: department.head.id, email: department.head.email, qualifications: department.head.qualifications, researchAreas: department.head.researchAreas } }
        result.push(resultData)
    })


    return result;


}



function gradeDistribution() {
    let result = []

    departmentArray.map((department) => {

        department.courses.map((course) => {

            let courseId = course.courseId;
            let courseName = course.title;
            let totalStudents = course.students.length

            let totalAssignment = 0
            let totalMidterm = 0
            let totalFinal = 0




            course.students.map((student) => {

                let assignment = (student.grades.assignments.reduce((a, b) => a + b, 0)) / student.grades.assignments.length


                totalAssignment += assignment / course.students.length

                totalMidterm += student.grades.midterm / course.students.length


                totalFinal += student.grades.final / course.students.length

            })


            let totalAssignmentData = totalAssignment * 40 / 100
            let totalMidtermData = totalMidterm * 30 / 100
            let totalFinalData = totalFinal * 30 / 100

            let overall = totalAssignmentData + totalMidtermData + totalFinalData






            let resultData = {
                courseId, courseName, totalStudents, averages: {
                    totalAssignment, totalMidterm, totalFinal, overall
                }
            }




            result.push(resultData)







        })

    })

    return result


}


function extracurricularsReport() {
    let result = []

    departmentArray.map((department) => {
        let totalParticipants = 0
        let totalHours = 0
        let activities = [];




        department.courses.map((courses) => {
            let participants = 0;
            let hours = 0;

            courses.students.map((student) => {
                participants += student.extracurriculars.length
                student.extracurriculars.map((extracurricular)=>{
                 
                    hours+= extracurricular.hoursPerWeek;
                    let activitiesData = {name:extracurricular.activity,participantCount:1,totalHoursPerWeek:extracurricular.hoursPerWeek,averageHoursPerParticipant:extracurricular.hoursPerWeek/1,roles:[extracurricular.role],participants:[
                        extracurricular  
                    ]}

                    activities.push(activitiesData)
                    
                })

            });
            totalParticipants += participants
            totalHours += hours
           
            

           
            

        })

        result.push(activities)

        
        



        let averageHoursPerStudent = totalHours/totalParticipants
        let resultData = { totalParticipants,totalActivities:totalParticipants,averageHoursPerStudent }
        result.unshift(resultData)

    })



console.log(result);


}




// console.log(getStudentGpa());
// console.log(scheduleCourses());
// console.log(directoryWithContact());
// console.log(gradeDistribution());


extracurricularsReport()





