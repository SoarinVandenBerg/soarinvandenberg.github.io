const Crash = new Date("February 11, 2031 19:45:00");

setInterval(() => {
    const now = new Date();
    const diff = Crash - now;

    if (diff <= 0) {
        document.getElementById("countdown01").innerText = "BOOOOM";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n) => String(n).padStart(2, "0");

    document.getElementById("countdown01").innerText =
        `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1000);



const Grad = new Date("June 20, 2028 15:10:00");

setInterval(() => {
    const now = new Date();
    const diff = Grad - now;

    if (diff <= 0) {
        document.getElementById("countdown02").innerText = "We're free!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n) => String(n).padStart(2, "0");

    document.getElementById("countdown02").innerText =
        `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1000);



setInterval(() => {
    const now = new Date();

    const target = new Date();
    target.setHours(9, 0, 0, 0);

    if (now >= target) {
        target.setDate(target.getDate() + 1);
    }

    const diff = target - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");

    document.getElementById("countdown05").innerText =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1000);



setInterval(() => {
    const now = new Date();

    const target = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    target.setSeconds(-1);

    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n) => String(n).padStart(2, "0");

    document.getElementById("countdown04").innerText =
        `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1000);



setInterval(() => {
    const now = new Date();

    const target = new Date(now.getFullYear(), 11, 31, 23, 59, 59);

    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");

    document.getElementById("countdown03").innerText =
        `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1000);




// school countdowns 

        function safeSet(id, text) {
            const el = document.getElementById(id);
            if (el) el.innerText = text;
        }
        
        const now = new Date();
        const day = now.getDay();

        const startTime = new Date();
        startTime.setHours(8, 40, 0, 0);

        const endTime = new Date();
        endTime.setHours(15, 10, 0, 0);

        // I know this code is probably pretty bad, but I dont really care becuase it works :D

        if (day === 0 || day === 6) {
            safeSet("countdown1", "School is not in session!");
        }
        else if (now < startTime) {
            safeSet("countdown1", "School is not in session!");

        }
        else if (now > endTime) {
            safeSet("countdown1", "School is not in session!");
        }
        else {
            setInterval(() => {
                const pad = (num) => String(num).padStart(2, "0");
                const now = new Date();
                const diff = endTime - now;

                if (diff <= 0) {
                    safeSet("countdown1", "School is not in session!");
                    return;
                }

                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                safeSet("countdown1",
                `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
            }, 1000);
        }
        
        const now2 = new Date();
        const day2 = now2.getDay();
        
        if (day2 === 3) {

            setInterval(() => {
                const now2 = new Date();
                const currentTime = now2.getHours() * 60 + now2.getMinutes();
                const currentSeconds = now2.getSeconds();

        let block = "";
        let end = null;

        if (currentTime < 8 * 60 + 40) {
            block = "Before school";
            end = 8 * 60 + 40;
        }
        else if (currentTime <  10 * 60) {
            block = "class1";
            end = 10 * 60;
        }
        else if (currentTime <  10 * 60 + 10) {
            block = "break";
            end = 10 * 60 + 10;
        }
        else if (currentTime <  11 * 60 + 30) {
            block = "class2";
            end = 11 * 60 + 30;
        }
        else if (currentTime <  12 * 60 + 20) {
            block = "lunch";
            end = 12 * 60 + 20;
        }
        else if (currentTime <  13 * 60 + 40) {
            block = "class3";
            end = 13 * 60 + 40;
        }
        else if (currentTime <  13 * 60 + 50) {
            block = "break";
            end = 13 * 60 + 50;
        }
        else if (currentTime <  15 * 60 + 10) {
            block = "class4";
            end = 15 * 60 + 10;
        }
        else {
            block = "After school";
            end = null;
        }

        if (block === "Before school" || block === "After school") {
            safeSet("countdown2", "School is not in session!");
        }
        else if (block === "break") {
            safeSet("countdown2", "School is not in session!");
        }
        else {

                const nowInSeconds = currentTime * 60 + currentSeconds;

                const endInSeconds = end * 60;
                const diff = endInSeconds - nowInSeconds - 1;
                
                if (diff <= 0) {
                    safeSet("countdown2", "School is not in session!");
                    return;
                }

                const hours = Math.floor(diff / 3600);
                const minutes = Math.floor((diff % 3600) / 60);
                const seconds = diff % 60;

                const pad = (n) => String(n).padStart(2, "0");

                safeSet("countdown2",
                    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
            }
        }, 1000);
        }
    
    
    else if (day2 === 1 || day2 === 4) {
        
            setInterval(() => {
                const now2 = new Date();
                const currentTime = now2.getHours() * 60 + now2.getMinutes();
                const currentSeconds = now2.getSeconds();

                let block = "";
        let end = null;

        if (currentTime < 8 * 60 + 40) {
            block = "Before school";
            end = 8 * 60 + 40;
        }
        else if (currentTime <  10 * 60) {
            block = "class1";
            end = 10 * 60;
        }
        else if (currentTime <  10 * 60 + 10) {
            block = "break";
            end = 10 * 60 + 10;
        }
        else if (currentTime <  11 * 60 + 30) {
            block = "class2";
            end = 11 * 60 + 30;
        }
        else if (currentTime <  12 * 60 + 20) {
            block = "lunch";
            end = 12 * 60 + 20;
        }
        else if (currentTime <  13 * 60 + 20) {
            block = "class3";
            end = 13 * 60 + 20;
        }
        else if (currentTime < 13 * 60 + 25) {
            block = "break";
            end = 13 * 60 + 25
        }
        else if (currentTime < 14 * 60 + 5) {
            block = "fit";
            end = 14 * 60 + 5
        } 
        else if (currentTime <  14 * 60 + 10) {
            block = "break";
            end = 14 * 60 + 10;
        }
        else if (currentTime <  15 * 60 + 10) {
            block = "class4";
            end = 15 * 60 + 10;
        }
        else {
            block = "After school";
            end = null;
        }

        if (block === "Before school" || block === "After school") {
            safeSet("countdown2", "School is not in session!");
        }
        else if (block === "break") {
            safeSet("countdown2", "School is not in session!");
        }
        else {

                const nowInSeconds = currentTime * 60 + currentSeconds;

                const endInSeconds = end * 60;
                const diff = endInSeconds - nowInSeconds - 1;
                
                if (diff <= 0) {
                    safeSet("countdown2", "School is not in session!");
                    return;
                }

                const hours = Math.floor(diff / 3600);
                const minutes = Math.floor((diff % 3600) / 60);
                const seconds = diff % 60;

                const pad = (n) => String(n).padStart(2, "0");

                safeSet("countdown2",
                    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
            }
            }, 1000);
        }
    
    else if (day2 === 2 || day2 === 5) {

            setInterval(() => {
                const now2 = new Date();
                const currentTime = now2.getHours() * 60 + now2.getMinutes();
                const currentSeconds = now2.getSeconds();

                let block = "";
        let end = null;

        if (currentTime < 8 * 60 + 40) {
            block = "Before school";
            end = 8 * 60 + 40;
        }
        else if (currentTime <  9 * 60 + 40) {
            block = "class1";
            end = 9 * 60 + 40;
        }
        else if (currentTime <  9 * 60 + 45) {
            block = "break";
            end = 9 * 60 + 45;
        }
        else if (currentTime < 10 * 60 + 25) {
            block = "fit";
            end = 10 * 60 + 25;
        }
        else if (currentTime < 10 * 60 + 30) {
            block = "break";
            end = 10 * 60 + 30;
        }
        else if (currentTime <  11 * 60 + 30) {
            block = "class2";
            end = 11 * 60 + 30;
        }
        else if (currentTime <  12 * 60 + 20) {
            block = "lunch";
            end = 12 * 60 + 20;
        }
        else if (currentTime <  13 * 60 + 40) {
            block = "class3";
            end = 13 * 60 + 40;
        }
        else if (currentTime <  13 * 60 + 50) {
            block = "break";
            end = 13 * 60 + 50;
        }
        else if (currentTime <  15 * 60 + 10) {
            block = "class4";
            end = 15 * 60 + 10;
        }
        else {
            block = "After school";
            end = null;
        }

        if (block === "Before school" || block === "After school") {
            safeSet("countdown2", "School is not in session!");
        }
        else if (block === "break") {
            safeSet("countdown2", "School is not in session!");
        }
        else {

                const nowInSeconds = currentTime * 60 + currentSeconds;

                const endInSeconds = end * 60;
                const diff = endInSeconds - nowInSeconds - 1;
                
                if (diff <= 0) {
                    safeSet("countdown2", "School is not in session!");
                    return;
                }

                const hours = Math.floor(diff / 3600);
                const minutes = Math.floor((diff % 3600) / 60);
                const seconds = diff % 60;

                const pad = (n) => String(n).padStart(2, "0");

                safeSet("countdown2",
                    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
            }
            }, 1000);
        }
    
    else if (day2 === 0 || day2 === 6) {
        safeSet("countdown2", "School is not in session!");
    }

    const Freedom = new Date("June 23, 2026 15:10:00");

    setInterval(() => {
                const now3 = new Date();
                const diff = Freedom - now3;

                if (diff <= 0) {
                    safeSet("countdown3", "The school year is over!");
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                const pad = (n) => String(n).padStart(2, "0");

                safeSet("countdown3",
                    `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    }, 1000);



const endOfYear = new Date("June 22, 2027 15:10:00");

function countSchoolDaysPrecise(now, end) {
    const start = new Date(now);

    const schoolStart = new Date(start);
    schoolStart.setHours(8, 40, 0, 0);

    const schoolEnd = new Date(start);
    schoolEnd.setHours(15, 10, 0, 0);

    let fraction = 0;
    const weekday = start.getDay();
    const totalMinutes = 390;

    if (weekday >= 1 && weekday <= 5) {
        if (start < schoolStart) {
            fraction = 1;
        }
        else if (start >= schoolEnd) {
            fraction = 0;
        }
        else {
            let minutesLeft = (schoolEnd - start) / 60000;
            fraction = minutesLeft / totalMinutes;
        }
    }

    let fullDays = 0;

    let d = new Date(start);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 1);

    const endDay = new Date(end);
    endDay.setHours(0, 0, 0, 0);

    while (d <= endDay) {
        const wd = d.getDay();
        if (wd >= 1 && wd <= 5) {
            fullDays++;
        }
        d.setDate(d.getDate() + 1);
    }

    return fullDays + fraction;
}
setInterval(() => {
const precise = countSchoolDaysPrecise(new Date(), endOfYear);

let display = precise % 1 === 0
    ? precise.toString()
    : precise.toFixed(2);

safeSet("countdown4", display);
}, 1000);