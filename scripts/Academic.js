function displayPathway() {
    const track=document.getElementById("track");
    const year=document.getElementById("year");
    const content=document.getElementById("pathwayContent")
    var output;
    switch (true) {
        case track.value==="standard" && year.value==="freshman-1":
            output="standard + freshman-fall";
            break;
        case track.value==="standard" && year.value==="freshman-2":
            output="standard + freshman-spring";
            break;
        case track.value==="standard" && year.value==="sophomore-1":
            output="standard + sophomore-fall";
            break;
        case track.value==="standard" && year.value==="sophomore-2":
            output="standard + sophomore-spring";
            break;

        case track.value==="applied" && year.value==="freshman-1":
            output="applied + freshman-fall";
            break;
        case track.value==="applied" && year.value==="freshman-2":
            output="applied + freshman-spring";
            break;
        case track.value==="applied" && year.value==="sophomore-1":
            output="applied + sophomore-fall";
            break;
        case track.value==="applied" && year.value==="sophomore-2":
            output="applied + sophomore-spring";
            break;
        default:
            output="Please select track and year";
    }
    content.innerText = output;
}