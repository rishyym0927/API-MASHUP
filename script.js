const data = async (handle) => {
    try {
        const res = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`);
        const info = await res.json();
        const ratingDiv = document.getElementById('rating');
        ratingDiv.innerHTML = ''; // Clear previous search results
        if (info.status === 'OK') {
            info.result.forEach(rating => {
                const div = document.createElement('div');
                div.textContent = `User: ${rating.handle}, Contest ID: ${rating.contestId}, Old Rating: ${rating.oldRating}, New Rating: ${rating.newRating}`;
                ratingDiv.appendChild(div);
            });
        } else {
            ratingDiv.textContent = 'User not found or no rating available.';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.getElementById('searchButton').addEventListener('click', () => {
    const handle = document.getElementById('handleInput').value;
    if (handle.trim() !== '') {
        data(handle);
    }
});
