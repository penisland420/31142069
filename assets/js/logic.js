
(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;

    window.PAGE_DATA = {
        "PHOTOS": {
        },
        "CONTACT": {
          "TEXT": [
              "everman.patrick@gmail.com"
          ]  
        },
        "HELPFUL": {
          "TEXT":  [
                "http://dhspriory.org/kenny/PhilTexts/Camus/Myth%20of%20Sisyphus-.pdf",
                "https://plato.stanford.edu/",
                "https://kimcartoon.to/Cartoon/King-of-the-Hill/S10E06-Orange-You-Sad-I-Did-Say-Banana?id=6901",
                "https://www.reddit.com/r/Piracy/comments/2oftbu/guide_the_idiot_proof_guide_to_downloading_ebooks/",
                "https://www.youtube.com/watch?v=VVPyAU4l-sw"
            ]
        },
        "NOTES": {
            "TEXT": 
        },
        "MUSIC": {
            "PATWHATEV": {
                "TITLE": "Patwhatev",
                "YEAR": "2013 - 2018",
                "DESCRIPTION": "Solo garbage dump project",
                "ALBUMS": 
            },
           
        },
        "VIDEOS": {
            "MUSIC": {
                "HORSES": {
                    "TITLE": "Horses",
                    "YEAR": "2009 - 2011",
                    "DESCRIPTION": "Solo project",
                    "VIDEOS": [
                        '<iframe src="https://player.vimeo.com/video/11211099?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/11615414?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                    ]
                }, 
                "BRONSON": {
                    "TITLE": "Bronson",
                    "YEAR": "2011 - 2013",
                    "DESCRIPTION": "Solo project",
                    "VIDEOS": [
                        '<iframe src="https://player.vimeo.com/video/31351692?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/31768475?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/31769869?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/58603850?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/59451335?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/59877221?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                    ]
                },
                "WHY7NOT": {
                    "TITLE": "Why7Not",
                    "YEAR": "2013",
                    "DESCRIPTION": "Single concept project",
                    "VIDEOS": 
                }
            },
            "SKATE": { 
                "SKATEBOARDING": {
                    "VIDEOS": 
                }
            }
        }
    }

    // image path arrays, name of dir is first index 

    // create string for image paths
    window.stringPath = '';

    $document.ready(function() {
        //PROJECT RENDERER, DO NOT ALTER

        // Album loop
        $.each(window.PAGE_DATA.MUSIC, function(i, f) {
              var tblRow = "<tr>" + "<td>" + f.TITLE + "</td>" +
               "<td>" + f.YEAR + "</td>" + "<td>" + f.DESCRIPTION + "</td>" + "<td>" + f.ALBUMS + "</td>" + "</tr>"
               $(tblRow).appendTo("#albumdata tbody");
        });

        // Video loop
        $.each(window.PAGE_DATA.VIDEOS.MUSIC, function(i, f) {
            // console.dir(f);
              var tblRow = "<tr>" + "<td>" + f.TITLE + "</td>" +
               "<td>" + f.YEAR + "</td>" + "<td>" + f.DESCRIPTION + "</td>" + "<td>" + f.VIDEOS + "</td>" + "</tr>"
               $(tblRow).appendTo("#videodata tbody");
        });

        // Skate video loop
        $.each(window.PAGE_DATA.VIDEOS.SKATE, function(i, f) {
            // console.dir(f);
              var tblRow = "<tr>" + "<td>" + "Skate Videos" + "</td>" +
               "<td>" + f.YEAR + "</td>" + "<td>" + "Different bits of garbage footage" + "</td>" + "<td>" + f.VIDEOS + "</td>" + "</tr>"
               $(tblRow).appendTo("#skatedata tbody");
        });

        // called when art links clicked
        window.renderArt = function(folderPath) { // a key

            //get general arr of clicked category
            var selectedFolder = window.paths[folderPath].arr;

            // get name
            window.stringPath = selectedFolder[0];

            let markup = ''

            // iterate through arrays after title, index 0 = filename, 1 = caption string
            for (i = 1; i < selectedFolder.length; i++) {
                //add filename
                var imageHtml = pushPaths(selectedFolder[i][0]);
                
                let textArr = selectedFolder[i][1];
                let title = textArr[0];
                let year = textArr[1];

                let textHtml = `<h4 class="title">${title} </h4><br><h5 class="year">${year} </h5>`;
                if(i == 1) {
                    var markupString = `<div class="pair top">${imageHtml} <div class="textbox">${textHtml} </div> </div>`;
                } else {
                    var markupString = `<div class="pair">${imageHtml} <div class="textbox">${textHtml} </div> </div>`;
                }
                markup += (markupString);
            }
            $('#content-zone').html(markup); //put the response on the dom
        }

        // called when text links clicked
        window.renderText = function(folderPath) { // a key
            const text = window.PAGE_DATA[folderPath].TEXT;
            let markup = '';

            text.forEach(string => {
                if(folderPath === 'HELPFUL') {
                    markup += ` <div class="renderedText"><a href="${string}" target="blank"><h5>${string}</h5></a></div>`;
                } else{
                    markup += ` <div class="renderedText"><h5>${string}</h5></div>`;                    
                }
            });

            $('#content-zone').html(markup); //put the response on the dom

        }

        // take each image, concat path
        window.pushPaths = function(img) {
                var imagePrefix = '<img class="image" src="https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/';
                var imageSuffix = '"></br>';
                var imageHtml = imagePrefix + img + imageSuffix;
                console.log(imageHtml);
                return imageHtml;
        }

        window.displayText = function() {
            $('#content-zone').html('<p>penis</p>'); //empty footer area
        }
        
        displayText();


     });
})();