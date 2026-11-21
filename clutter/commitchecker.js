// I did have to look up how to do this so I guess I didnt code all of this page myself


// counter code

function getTime(dateString) {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);

    let interval = seconds / 31536000;
    if (interval >= 1) return Math.floor(interval) + " years";

    interval = seconds / 2592000;
    if (interval >= 1) return Math.floor(interval) + " months";

    interval = seconds / 86400;
    if (interval >= 1) return Math.floor(interval) + " days";

    interval = seconds / 3600;
    if (interval >= 1) return Math.floor(interval) + " hours";

    interval = seconds / 60;
    if (interval >= 1) return Math.floor(interval) + " minutes";

    return Math.floor(seconds) + " seconds"; 
}


// Status code

async function getCommitStatus() {
    const owner = "SoarinVandenBerg";
    const repo = "soarinvandenberg.github.io";
    const branch = "main";

    try {
        const checksResponse = await fetch (`https://api.github.com/repos/${owner}/${repo}/commits/${branch}/check-runs`);
        const commitResponse = await fetch (`https://api.github.com/repos/${owner}/${repo}/commits/${branch}`);

        if (!checksResponse.ok || !commitResponse.ok) {
            throw new Error(`ERROR: ${checksResponse.status}`);
        }

        const data = await checksResponse.json();
        const totalChecks = data.total_count;

        if (totalChecks === 0) {
            document.getElementById("github-status").innerText = "There's something really wrong";
            return;
        }

        let passedChecks = 0;
        data.check_runs.forEach(check => {
            if (check.status === "completed" && check.conclusion === "success") {
                passedChecks++;
            }
        });

        document.getElementById("github-status").innerText = `${passedChecks}/${totalChecks} Passed`;

    const commitData = await commitResponse.json();
    const commitDate = commitData.commit.author.date;

    document.getElementById("github-time").innerText = getTime(commitDate);

} catch (error) {
        console.error("ERROR: Failed to get Github Status:", error);
        document.getElementById("github-status").innerText = "ERROR: You're being rate limited!";
        document.getElementById("github-time").innerText = "ERROR: You're being rate limited!";
    }
}

document.addEventListener("DOMContentLoaded", getCommitStatus);