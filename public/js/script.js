document.addEventListener('DOMContentLoaded', function() {

const fileInput = document.getElementById('image');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            const fileName = this.files[0].name;
            const fileLabel = document.querySelector('.form-label[for="image"]');
            fileLabel.textContent = `Vehicle Image: ${fileName}`;
        });
    }

    const priceInput = document.getElementById('price');
    if (priceInput) {
        priceInput.addEventListener('blur', function() {
            if (this.value) {
                this.value = parseFloat(this.value).toFixed(2);
            }
        });
    }
});
