

async function getJobs() {
    await sleep(4000)
    const jobDescription = document.querySelector('.job-description');
    jobDescription.style.animationIterationCount = '3';
    let job = ['Software Ingineer', 'Web developer', 'Web designer']
    for (let i = 0; i < job.length; i++) {
        jobDescription.innerHTML = "";

        jobDescription.innerHTML = job[i];
        await sleep(5000)

    }
    isFinished = true;
    return isFinished;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isFinished = false;

isFinished = getJobs();

window.addEventListener('scroll', function () {
    if (isFinished) {
        isFinished = false;
        getJobs();
    }
})