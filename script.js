function openpage(evt, academy) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(academy).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultopen").click();
function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    // Hide other details
    const allDetails = document.querySelectorAll('.course-details');
    allDetails.forEach(detail => {
      detail.style.display = "none";
    });
    // Show the selected details
    details.style.display = "block";
  }
}
function showThankYouMessage(event) {
  event.preventDefault(); // Prevent the default form submission

  // Hide the form
  document.getElementById('enquiry-form').style.display = 'none';

  // Show the thank-you message
  document.getElementById('thank-you-message').style.display = 'block';
}
