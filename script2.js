 $("#searchBtn").on("click", function (event) {
       event.preventDefault();
           var search = $("#inputSearchTerm").val();
           var api = "&api-key=fKzb6PdH7JNNEHJUmwf4GP3KPc0qNP80"
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search;

                console.log(search)

                var startYear = $("#inputStartYear");
                var endYear = $("#inputEndYear");

            $.ajax({
                    url: queryURL + api,
                    method: "GET"
                })
                .then(function (response) {
                    $("#articlesHere").empty();
                    var results = response.response.docs;
                    console.log(results);
                    


                    for (var i = 0; i < results.length; i++) {
                        //create div to hold article
                        var articleDiv = $("<div>");
                        articleDiv.attr("class", "articles")
                        // grab article preview
                        var preview = results[i].lead_paragraph;
                        var headerText = results[i].headline.main;
                        
                        var header = $("<h4>").text(headerText);
                        var p = $("<p>").text(preview);
                        console.log(headerText)
                        articleDiv.append(header);
                        articleDiv.append(p);
                        $("#articlesHere").append(articleDiv);
                    }
                });
        });  