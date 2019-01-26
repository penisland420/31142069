
(function() {
    var $document = $(document);
    var KEYCODE_ESC = 27;

    window.PAGE_DATA = {
        "PHOTOS": {
        },
        "MUSIC": {
            "PATWHATEV": {
                "TITLE": "Patwhatev",
                "YEAR": "2013 - 2018",
                "DESCRIPTION": "Solo garbage dump project",
                "ALBUMS": [
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=22937234/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://patwhatev.bandcamp.com/album/songs-for-poppers-or-other-drugs-i-cant-do">Songs for poppers or other drugs I can&#39;t do by patwhatev</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1528413869/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://patwhatev.bandcamp.com/album/braindead-the-mixtape-vol-1">Braindead the mixtape: vol 1 by patwhatev</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=2037392456/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://patwhatev.bandcamp.com/album/braindead-the-mixtape-vol-2">Braindead the mixtape: vol 2 by patwhatev</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=858663770/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://patwhatev.bandcamp.com/album/bright-eyes-chopped-and-slopped">Bright Eyes (Chopped and Slopped) by patwhatev</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1092955824/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://patwhatev.bandcamp.com/album/music-for-5th-graders">Music for 5th graders by patwhatev</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=3273577487/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://patwhatev.bandcamp.com/album/gta-iii-remixes">GTA III Remixes by patwhatev</a></iframe>'
                ]
            },
            "WHY7NOT": {
                "TITLE": "Why7Not",
                "YEAR": "2013",
                "DESCRIPTION": "Single concept project",
                "ALBUMS": [
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1880760862/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://why7not.bandcamp.com/album/why7not">why7not by why7not</a></iframe>'
                ]
            },
            "BRONSON": {
                "TITLE": "Bronson",
                "YEAR": "2011 - 2013",
                "DESCRIPTION": "Solo project",
                "ALBUMS": [
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1941549238/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bronson.bandcamp.com/album/gulch">Gulch by Bronson</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=3298068215/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bronson.bandcamp.com/album/paper-tusk">Paper Tusk by Bronson</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=2264591569/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bronson.bandcamp.com/album/made-up-mixtape">Made Up   [Mixtape] by Bronson</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=503369232/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bronson.bandcamp.com/album/materia-obscura">materia obscura by Bronson</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1952967654/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bronson.bandcamp.com/album/moth-mixtape">Moth [mixtape] by Bronson</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1610227093/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bronson.bandcamp.com/album/is-more-mixtape">Is More [Mixtape] by Bronson</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=2581192708/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bronson.bandcamp.com/album/le-favole-di-casimiro-original-soundtrack">Le favole di Casimiro (Original Soundtrack) by Bronson</a></iframe>'
                ]
            },
            "HORSES": {
                "TITLE": "Horses",
                "YEAR": "2009 - 2011",
                "DESCRIPTION": "Solo project",
                "ALBUMS": [
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1688633868/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://horses.bandcamp.com/album/sincerely-jackie-chan-japanese-release">Sincerely, Jackie Chan (Japanese Release) by HORSES</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=4041971751/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://horses.bandcamp.com/album/parable-tape">Parable-[tape] by HORSES</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1519246960/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://horses.bandcamp.com/album/thats-amore">That&#39;s Amore! by HORSES</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=1852123857/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://horses.bandcamp.com/album/bikinis-babes-and-b-sides">Bikinis, Babes, and B-Sides by HORSES</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=2638991351/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://horses.bandcamp.com/album/intervals-ep">Intervals ep by HORSES</a></iframe>'
                ]
            },
            "CATCHER": {
                "TITLE": "Catcher",
                "YEAR": "2010",
                "DESCRIPTION": "2 piece project with Alexandra Song",
                "ALBUMS": [
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=4168999312/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://catcher-burner.bandcamp.com/album/demos">Demos by Catcher</a></iframe>'
                ]
            },
            "BLUEBIRD": {
                "TITLE": "Bluebird",
                "YEAR": "2008? - 2010",
                "DESCRIPTION": "2 piece project with Drew Miller",
                "ALBUMS": [
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=3441988798/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bluebird-burner.bandcamp.com/album/ifonlyif">ifonlyif by bluebird</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=2546412797/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bluebird-burner.bandcamp.com/album/untitled-split-with-a-locket">Untitled (Split With A Locket) by bluebird</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=3903701882/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bluebird-burner.bandcamp.com/album/a-future-reminiscence">A Future Reminiscence by bluebird</a></iframe>',
                    '<iframe style="border: 0; width: 195px; height: 387px;" src="https://bandcamp.com/EmbeddedPlayer/album=3443237767/size=large/bgcol=ffffff/linkcol=63b2cc/transparent=true/" seamless><a href="http://bluebird-burner.bandcamp.com/album/in-the-echo-well-split">In the Echo Well (Split) by bluebird</a></iframe>'
                ]
            }
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
                    "VIDEOS": [
                        '<iframe src="https://player.vimeo.com/video/80213525?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/81520380?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/81457879?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/82058356?color=FFF&title=0&byline=0&portrait=0" width="340" height="187" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/81400274?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/80194872?color=FFF&title=0&byline=0&portrait=0" width="340" height="191" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                    ]
                }
            },
            "SKATE": { 
                "SKATEBOARDING": {
                    "VIDEOS": [
                        '<iframe width="430" height="249" src="https://www.youtube.com/embed/326Iq4CJoxc?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        '<iframe width="430" height="249" src="https://www.youtube.com/embed/ustZO46Tla8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        '<iframe width="430" height="249" src="https://www.youtube.com/embed/Zh_5T5t1CW8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        '<iframe src="https://player.vimeo.com/video/275150933?color=FFF&title=0&byline=0&portrait=0" width="340" height="249" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                    ]
                }
            }
        }
    }

    // image path arrays, name of dir is first index 
    window.paths = {
        "paint" : {
            "arr" : [
                "paint",
                ["59c7ed2103596e9882d487a6/59c7eebc59cc68469d08cb11/1506275027311/_CV_0014.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eea5268b96c839ea94ab/1506275007707/_CV_0017.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eea4a803bbff9d2a7dbe/1506275010327/_CV_0019.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee8ba9db099270729e28/1506274983172/_CV_0021.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee7fc027d8d270c8b222/1506274962884/_CV_0022.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee79a803bbff9d2a7c74/1506274958062/_CV_0023.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee6af43b55ff86c1e5a1/1506274946439/_CV_0024.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee66d55b414bfd56fa10/1506274940249/_CV_0025.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee548419c269b825da1c/1506274920904/_CV_0026.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee540abd04d34ca8d860/1506274925283/_CV_0029.jpg",['example title' , '2017']]
            ]
        },
        "paper" : {
            "arr" : [
                "paper",
                ["59c7ed2103596e9882d487a6/59c7eec5cd39c354a17fb2a5/1506275045935/_CV_0011.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eed0edaed88dfdfc9e41/1506275052015/_CV_0010.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee3fcd0f687a8b26fdf5/1506274903257/_CV_0030.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee419f8dcec995898173/1506274903195/_CV_0032.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee2d64b05f184cbe6ac3/1506274883916/_CV_0033.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee2cedaed88dfdfc983f/1506274882028/_CV_0034.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee1659cc68469d08c597/1506274863393/_CV_0035.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee1618b27d6b849b8d07/1506274865414/_CV_0037.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ed22e5dd5b140a5beaf5/1506274611972/_CV_0040.jpg",['example title' , '2017']],
            ]
        },
        "cloth" : {
            "arr" : [
                "cloth",
                ["59c7ed2103596e9882d487a6/59c7ed22d7bdce9aca01c317/1506274627830/_CV_0047.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7ee8f4c326d162b6c11f9/1506274985711/_CV_0020.jpg",['example title' , '2017']],
                ["59c7ed2103596e9882d487a6/59c7eebc03596e9882d4972e/1506275017631/_CV_0013.jpg",['example title' , '2017']]
            ]
        },
        "contact" : {
            "text" : "everman.patrick@gmail.com"
        }
    }

    // default text
    window.texts = {
        'one' : "a catalog of most of the tattoos on my body",
        'two' : [],
        'three' : []
     }

    // create string for image paths
    window.stringPath = '';

    $document.ready(function() {
        //PROJECT RENDERER, DO NOT ALTER

        // Album loop
        $.each(window.PAGE_DATA.MUSIC, function(i, f) {
            console.dir(f);
              var tblRow = "<tr>" + "<td>" + f.TITLE + "</td>" +
               "<td>" + f.YEAR + "</td>" + "<td>" + f.DESCRIPTION + "</td>" + "<td>" + f.ALBUMS + "</td>" + "</tr>"
               $(tblRow).appendTo("#albumdata tbody");
        });

        // Video loop
        $.each(window.PAGE_DATA.VIDEOS.MUSIC, function(i, f) {
            console.dir(f);
              var tblRow = "<tr>" + "<td>" + f.TITLE + "</td>" +
               "<td>" + f.YEAR + "</td>" + "<td>" + f.DESCRIPTION + "</td>" + "<td>" + f.VIDEOS + "</td>" + "</tr>"
               $(tblRow).appendTo("#videodata tbody");
        });

        // Skate video loop
        $.each(window.PAGE_DATA.VIDEOS.SKATE, function(i, f) {
            console.dir(f);
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
            // $('.text-frame').html(img.toString().split('.')[0]); //put the response on the dom
        }

        // called when text links clicked
        window.renderText = function(folderPath) { // a key

            var text = window.paths[folderPath].text;
            let markup = ` <div class="renderedText"><h5>${text}</h5></div>`;
            $('#content-zone').html(markup); //put the response on the dom
            $('.text-frame').html(img.toString().split('.')[0]); //put the response on the dom
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
            $('#content-zone').html('<img class="image top" src="https://static1.squarespace.com/static/53667a41e4b0e77173cb3dd1/59c7ed2103596e9882d487a6/59c7eea4a803bbff9d2a7dbe/1506275010327/_CV_0019.jpg"/>'); //empty footer area
        }
        
        displayText();


     });
})();