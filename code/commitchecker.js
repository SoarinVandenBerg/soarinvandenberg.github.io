// I did have to look up how to do this so I guess I didnt code all of this page myself


// counter code

function getTime(dateString) {
  const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);

  let interval = seconds / 31536000;
  let count = Math.floor(interval)
  if (count >= 1) return count + (count === 1 ? " year" : " years");

  interval = seconds / 2592000;
  count = Math.floor(interval);
  if (count >= 1) return count +(count === 1 ? " month" : " months");

  interval = seconds / 86400;
  count = Math.floor(interval);
  if (count >= 1) return count + (count === 1 ? " day" : " days");

  interval = seconds / 3600;
  count = Math.floor(interval);
  if (count >= 1) return count + (count === 1 ? " hour" : " hours");

  interval = seconds / 60;
  count = Math.floor(interval);
  if (count >= 1) return count + (count === 1 ? " minute" : " minutes");

  return Math.floor(seconds) + (count === 1 ? " second" : " seconds");
}


// Status code

async function getCommitStatus() {
  const owner = "SoarinVandenBerg";
  const repo = "soarinvandenberg.github.io";
  const branch = "main";

  try {
    const checksResponse = await fetch (`https://api.github.com/repos/${owner}/${repo}/commits/${branch}/check-runs`);
    const commitResponse = await fetch (`https://api.github.com/repos/${owner}/${repo}/commits/${branch}`);
    const numberResponse = await fetch (`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=1`);

    if (!numberResponse.ok) {
      const match = numberResponse.headers.get('link').match(/&page=(\d+)>; rel="last"/);
      document.getElementById("github-number").innerText = parseInt(match[1], 10);
      throw new Error (`ERROR: ${numberResponse.status}`);
    }

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
    })

    document.getElementById("github-status").innerText = `${passedChecks}/${totalChecks} passed`;

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