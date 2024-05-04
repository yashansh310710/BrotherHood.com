document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData();
    var videoName = document.getElementById('videoName').value;
    var videoFile = document.getElementById('videoFile').files[0];
    
    formData.append('videoName', videoName);
    formData.append('videoFile', videoFile);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Video uploaded successfully!');
        } else {
            alert('Error uploading video.');
        }
    })
    .catch(error => console.error('Error:', error));
});
