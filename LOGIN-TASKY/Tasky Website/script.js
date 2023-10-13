// script.js
document.addEventListener('DOMContentLoaded', function () {
    let likeCount = 0;

    // Get elements with class "like-button" and "dislike-button"
    const likeButtons = document.getElementsByClassName("like-button");
    const dislikeButtons = document.getElementsByClassName("dislike-button");

    // Get elements with class "like-count"
    const likeCountElements = document.getElementsByClassName("like-count");

    // Add click event listeners to like buttons
    for (var i = 0; i < likeButtons.length; i++) {
        likeButtons[i].addEventListener('click', function () {
            likeCount++;
            updateLikeCounts();
        });
    }

    // Add click event listeners to dislike buttons
    for (var i = 0; i < dislikeButtons.length; i++) {
        dislikeButtons[i].addEventListener('click', function () {
            likeCount--;
            updateLikeCounts();
        });
    }

    // Function to update like counts on all elements with class "like-count"
    function updateLikeCounts() {
        for (var i = 0; i < likeCountElements.length; i++) {
            likeCountElements[i].textContent = likeCount;
        }
    }

    // Initial update of like counts
    updateLikeCounts();
});


$(document).ready(function () {
    $("#addTaskButton").click(function () { // Clone the task entry structure
        var newTaskEntry = $(".task-entry:first").clone();

        // Clear input fields in the cloned task entry (optional)
        newTaskEntry.find("input[type='text']").val("");
        newTaskEntry.find("input[type='date']").val("");
        newTaskEntry.find("select").val("");

        // Append the cloned task entry to the taskContainer
        $("#taskContainer").append(newTaskEntry);
    });
});


$(document).ready(function () {
    $("#addTaskButton").click(function () { // Open the comment modal
        $('#commentModal').modal('show');
    });
});


$(document).ready(function () {
    $(".greaterThanButton").click(function () { // Toggle the visibility of the right container
        $(".task-comment-section").show();
        $(".task-details-section").hide();
    });
});
$(document).ready(function () {
    $(".lessThanButton").click(function () { // Toggle the visibility of the right container
        $(".task-comment-section").hide();
        $(".task-details-section").show();
    });
});



window.onload = function () {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        const headers = new Headers({
            'Authorization': `Bearer ${authToken}`,
        });
        const request = new Request('http://127.0.0.1:8000/api/user-details', {
            method: 'GET',
            headers: headers,
        });
        fetch(request)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('User details retrieval failed.');
                }
            })
            .then(userDetails => {
                if (userDetails) {
                    localStorage.setItem('userDetails', JSON.stringify(userDetails));
                } else {
                    console.error('User details retrieval failed.');
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    } else {
        console.error('Authentication token not found. Please log in.');
    }
};

