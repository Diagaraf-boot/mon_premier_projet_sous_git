const courseNameInput = document.querySelector('#input-course-name');
const courseRatingInput = document.querySelector('#input-course-rating');
const addBtn = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');
const alertCtrl = document.querySelector('ion-alert-controller');

addBtn.addEventListener('click', () => {
    const enteredCourseName = courseNameInput.value;
    const enteredCourseRating = courseRatingInput.value;

    if(
        enteredCourseName.length <= 0 ||
        enteredCourseRating.length <= 0 ||
        enteredCourseRating < 1 ||
        enteredCourseRating > 5
    )  {
        alertCtrl.create({
            header: 'Invalid Input',
            message: 'Please enter a valid course name and rating', 
            button: ['Okay']
        })
        .then(alertEl => alertEl.present());
      return;  
    }
    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredCourseName}:</strong>&nbsp;${enteredCourseRating}/5`;

    courseList.appendChild(newItem);

    courseNameInput.value = '';
    courseRatingInput.value = '';
});