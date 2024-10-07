// Tooltip functionality
const tooltip = document.getElementById("tooltip");
const gemstones = document.querySelectorAll(".gemstone");

gemstones.forEach(gemstone => {
    gemstone.addEventListener("mouseover", (event) => {
        tooltip.textContent = event.target.closest('.gemstone').dataset.tooltip;
        tooltip.style.display = "block";
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    gemstone.addEventListener("mousemove", (event) => {
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    gemstone.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    });
});

document.getElementById('searchBar').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let gemstones = document.querySelectorAll('.grid-container .gemstone');

    gemstones.forEach(function(gemstone) {
        let text = gemstone.textContent || gemstone.innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            gemstone.style.display = "";
        } else {
            gemstone.style.display = "none";
        }
    });
});

function searchGemstones() {
    const input = document.getElementById('search').value.toLowerCase();
    const gemstones = document.querySelectorAll('.gemstone');
    
    gemstones.forEach(gemstone => {
        const name = gemstone.textContent.toLowerCase();
        if (name.includes(input)) {
            gemstone.style.display = 'block';
        } else {
            gemstone.style.display = 'none';
        }
    });
}
