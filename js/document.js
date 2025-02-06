const pdfInput = document.getElementById('pdfInput');
const uploadBtn = document.getElementById('uploadBtn');
const downloadBtn = document.getElementById('downloadBtn');
const pdfPreview = document.getElementById('pdfPreview');

uploadBtn.addEventListener('click', () => {
    const file = pdfInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = e.target.result; 
            downloadLink.download = file.name; 
            downloadLink.text = 'Download Uploaded PDF'; 
            pdfPreview.appendChild(downloadLink); 
        };

        reader.readAsDataURL(file); 
    } else {
        alert('Please select a PDF file.');
    }
});

downloadBtn.addEventListener('click', () => {
    // For demonstration, you can use a sample PDF URL
    const pdfUrl = 'path/to/your/sample.pdf'; // Replace with the actual PDF URL

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'sample.pdf'; 
    downloadLink.text = 'Download Sample PDF';
    pdfPreview.appendChild(downloadLink);
});