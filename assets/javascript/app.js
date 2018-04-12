


let corsProxy = "https://cors-anywhere.herokuapp.com/"

let you_tube_api = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCnOTuLBZZpETMWOihrNC53xpHYOhoA2s`
let apiUrl2 = corsProxy + you_tube_api

$("#submit-button").on("click", function(){
    event.preventDefault()
    let current_search = $("#search-form").val().trim()
    console.log(current_search)
    $("#search-form").val("")

    $.ajax({
        type: `GET`,
        url: apiUrl2,
        data: {
            q: current_search,
            part: "snippet",
        }
    }).then(function(response){
        $("#display").empty()
        console.log(response)
        for (i=0; i<response.items.length; i++) {
        let id = response.items[i].id.videoId
        let channel_title = response.items[i].snippet.channelTitle
        let description = response.items[i].snippet.description
        let date_published = response.items[i].snippet.publishedAt
        let image = response.items[i].snippet.thumbnails.default
        let new_row = `<tr> <td><img src="${image.url}"></td> <td>${id}</td> <td>${description}</td> <td>${date_published}</td> <td>${channel_title}</td> </tr>`
        $("#display").append(new_row)
    }
    });
})