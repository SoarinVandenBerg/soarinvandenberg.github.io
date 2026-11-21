// I did have to look up how to do this so I guess I didnt code all of this page myself

async function getCommitStatus() {
    const owner = "SoarinVandenBerg";
    const repo = "soarinvandenberg";
    const branch = "main";

    try {
        const response = await fetch (`https://api.github.com/repos/${owner}/${repo}/commits/${branch}/check-runs`);

        if (!response.ok) {
            throw new Error(`ERROR: ${response.status}`);
        }

        const data = await response.json();
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

    } catch (error) {
        console.error("ERROR: Failed to get Github Status:", error);
        document.getElementById("github-status").innerText = "ERROR: Status unavailable";
    }
}

document.addEventListener("DOMContentLoaded", getCommitStatus);