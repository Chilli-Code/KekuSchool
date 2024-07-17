document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll('tbody tr');
    const selectAllCheckbox = document.getElementById('selectAll');

    if (!selectAllCheckbox) return;

    rows.forEach(row => {
        const checkbox = row.querySelector('.rowCheckbox');

        if (checkbox) {
            checkbox.addEventListener('change', () => {
                row.classList.toggle('selected-row', checkbox.checked);
            });

            row.addEventListener('click', () => {
                checkbox.checked = !checkbox.checked;
                row.classList.toggle('selected-row', checkbox.checked);
            });
        }
    });

    selectAllCheckbox.addEventListener('change', () => {
        const checkboxes = document.querySelectorAll('.rowCheckbox');

        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            if (row) {
                checkbox.checked = selectAllCheckbox.checked;
                row.classList.toggle('selected-row', checkbox.checked);
            }
        });
    });
});
