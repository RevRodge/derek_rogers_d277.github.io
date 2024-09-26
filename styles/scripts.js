
/*I really struggled to find content to fill the aside element, 
        so I learned how to pull stories from reddit.
        I think this is a little outside the scope of the assignment, 
        so I hope it isn't too far out of bounds*/
        
//Finds and loads content for the aside element on each page        
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.reddit.com/r/FloridaMan/top.json?limit=10') // fetches up to 10 posts, seems like ads interfere before that
        .then(response => response.json())
        .then(data => {
            const posts = data.data.children;
            const postsList = document.getElementById('florida-man-posts');

            posts.forEach(post => {
                const listItem = document.createElement('li');
                const postTitle = post.data.title;
                const postUrl = `https://www.reddit.com${post.data.permalink}`;
                const thumbnailUrl = post.data.thumbnail;

                // display posts with a valid thumbnail
                if (thumbnailUrl && !thumbnailUrl.includes('default')) {
                    listItem.innerHTML = `
                        <a href="${postUrl}" target="_blank">
                            <img src="${thumbnailUrl}" alt="${postTitle}" />
                            <div>${postTitle}</div>
                        </a>
                    `;
                } else {
                    // in case of no thumbnail
                    listItem.innerHTML = `
                        <a href="${postUrl}" target="_blank">
                            <div>${postTitle}</div>
                        </a>
                    `;
                }
                
                postsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});

// email validation
function validateForm() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    // Validate email matching
    if (email !== confirmEmail) {
        alert("Email addresses do not match.");
        return false;
    }

    return true;
}