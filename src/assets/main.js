$(function() {
  let reportCardUrl = 'https://www.codeschool.com/users/Irvyne.json';

  $.ajax({
    url: reportCardUrl,
    dataType: 'jsonp',
    success: function(response) {
      let completedCourses = response.courses.completed;
      let badgesDOM = $('#badges');

      $.each(completedCourses, function(index, badge) {
        badgesDOM.append(
          `<div class="course">
            <h3>${badge.title}</h3>
            <img src="${badge.badge}" alt="${badge.title}">
            <a target="_blank" href="${badge.url}" class="btn btn-primary">See Course</a>
          </div>`
        );
      });
    }
  });
});
