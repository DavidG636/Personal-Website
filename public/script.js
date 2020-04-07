$(function() {
  var path = window.location.pathname;
  path = new String(path);

  $('.gitPicWatchLater').unbind().click(function() {
    window.open('https://github.com/DavidG636/Youtube-Watch-Later-Player', '_blank');
  });

  $('.webPicWatchLater').unbind().click(function() {
    window.open('https://davidg636.github.io/Youtube-Watch-Later-Player/', '_blank');
  });

  $('.gitPicCase').unbind().click(function() {
    window.open('https://github.com/DavidG636/Case', '_blank');
  });

  $('.gitPicParagraphUtilities').unbind().click(function() {
    window.open('https://github.com/DavidG636/Paragraph-Utilities', '_blank');
  });

  $('.webPicParagraphUtilities').unbind().click(function() {
    window.open('https://paragraph-utilities.herokuapp.com', '_blank');
  });

  $('.gitPicLowercase').unbind().click(function() {
    window.open('https://github.com/DavidG636/Lowercase', '_blank');
  });

  $('.gitPicLeapYear').unbind().click(function() {
    window.open('https://github.com/DavidG636/leapYear', '_blank');
  });

  $('.webPicLeapYear').unbind().click(function() {
    window.open('https://davidg636.github.io/leapYear/', '_blank');
  });

  $('.gitPicHelloName').unbind().click(function() {
    window.open('https://github.com/DavidG636/helloName', '_blank');
  });

  $('.filePicHelloName').unbind().click(function() {
    window.open('https://github.com/DavidG636/helloName/blob/master/helloName.c', '_blank');
  });

  $('.profilePic').unbind().click(function() {
    window.open('https://github.com/DavidG636', '_blank');
  });

  $('.filePicPaceSeidenbergStemCamp2017').unbind().click(function() {
    window.open('https://github.com/DavidG636/Pace-Seidenberg-Stem-Camp-2017/blob/master/script.py', '_blank');
  });

  $('.webPicTodayIWill').unbind().click(function() {
    window.open('https://davidg636.github.io/Today-I-Will/', '_blank');
  });

  $('.filePicProjectAutomation').unbind().click(function() {
    window.open('https://github.com/DavidG636/Project-Automation/blob/master/createProject.bat', '_blank');
  });

  $('.filePicComputerMode').unbind().click(function() {
    window.open('https://github.com/DavidG636/Computer-Mode/blob/master/loadPreset.bat', '_blank');
  });

  $('.webPicMoodMail').unbind().click(function() {
    window.open('https://mood-mail.herokuapp.com', '_blank');
  });

  $('.linkedInPic').unbind().click(function() {
    window.open('https://www.linkedin.com/in/david-gonzalez-856093171', '_blank');
  });

  $('.gitPhotoLink').unbind().click(function() {
    window.open('https://github.com/DavidG636', '_blank');
  });

  $('.otherAccountProfilePic').unbind().click(function() {
    window.open('https://davidg1739.github.io/', '_blank');
  });

  class Typewriter {
    constructor(element, words, wait = 3000) {
      this.element = element;
      this.words = words;
      this.text = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {

      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];

      if (this.isDeleting) {
        this.text = fullTxt.substring(0, this.text.length - 1);
      } else {
        this.text = fullTxt.substring(0, this.text.length + 1);
      }

      this.element.html(`<span class="txt">${this.text}</span>`);
      let speed = 300;

      if (this.isDeleting) {
        speed /= 2;
      }

      if (!this.isDeleting && this.text === fullTxt) {
        speed = this.wait;

        for (let i = 0; i <= 2; i++) {
          $(".typewriter>.txt").css("border-right", "none");
          setTimeout(() => {
            $(".typewriter>.txt").css("border-right", "0.2rem solid #777");
          }, 500);
        }

        this.isDeleting = true;
      } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.wordIndex++;
        speed = 500;
      }

      setTimeout(() => {
        this.type();
      }, speed);
    }
  }

  if (path == '/WhoAmI') {
    const element = $('.typewriter');
    const words = JSON.parse($(element).attr('data-words'));
    const wait = $(element).attr('data-wait');
    var creator = new Typewriter(element, words, wait);
  } else if (path == '/hstat' || path == "/pace") {
  } else if (path == "/case") {
    var state;
    var change;
    $(".submitText-case").click(function() {
      state = $('.slider').css('background-color');
      state = new String(state);

      let textContent = $('#text').val();
      var changedText;

      if (state == 'rgb(42, 185, 52)') {
        change = 'capital';
      } else if (state == "rgb(202, 34, 34)") {
        change = 'lower';
      }

      if (change == 'capital') {
        changedText = textContent.toUpperCase();
        $('#text').val(changedText)

      } else if (change == 'lower') {
        changedText = textContent.toLowerCase();
        $('#text').val(changedText)
      }
    });
  } else if (path == "/Primality-Checker") {
    $(".primalityChecker-textInput").keypress(function(e) {

      if (e.which == 13) {
        e.preventDefault();
        move();
      }

      let letterKeyCodes = [];

      for (i = 48; i < 58; i++) {
        letterKeyCodes.push(i);
      }

      if (!(letterKeyCodes.indexOf(e.which) >= 0)) {
        e.preventDefault();
      }
    });

    function isPrime(num) {
      let number = new Number(num);
      let bool = true;
      for (var i = 2; i < num; i++) {
        if ((number % i) == 0) {
          bool = false;
        }
      }
      return bool;
    }


    function move() {
      var elem = $("#primalityChecker-myBar");
      elem.css('display', 'block');
      var width = 0;
      var id = setInterval(frame, 20);

      function frame() {
        if (width >= 100) {
          clearInterval(id);
          showOutput()
        } else {
          width++;
          let temp = width + '%';
          $(elem).css('width', temp)
          $(elem).html(width * 1 + '%');
        }
      }
    }

    $('.primalityChecker-submit').click(function() {
      $('.primalityChecker-primeOrNot').css('display', 'none');
      move();
    });

    function showOutput() {
      $('#primalityChecker-myBar').css('display', 'none');
      $('.primalityChecker-primeOrNot').css('display', 'block');
      if (isPrime($('.primalityChecker-textInput').val())) {
        $('.primalityChecker-primeOrNot').html('It Is Prime!');
      } else {
        $('.primalityChecker-primeOrNot').html('It Is Not Prime!');
      }
    }
  } else if (path == "/Project-Info") {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('project');
    $(".project-name").html(myParam);
    $(".project-name").unbind().click(function() {
      window.open(`https://github.com/DavidG636/${myParam}`, "_blank");
    });

    $.ajax({
      url: `https://api.github.com/repos/DavidG636/${myParam}/commits`,
      type: 'GET',
      success: function(res) {
        $(".commit-amount").html(res.length);
      }
    });
    $.ajax({
      url: `https://api.github.com/repos/DavidG636/${myParam}/forks`,
      type: 'GET',
      success: function(res) {
        $(".fork-amount").html(res.length);
      }
    });
    $.ajax({
      url: `https://api.github.com/repos/DavidG636/${myParam}/languages`,
      type: 'GET',
      success: function(res) {
        let languages = Object.keys(res);
        let byteAmounts = Object.values(res);;
        let totalNumberOfBytes = 0;
        for (let i = 0; i < languages.length; i++) {
          $(".language-list").append(`<li>${languages[i]}</li>`)
          totalNumberOfBytes += byteAmounts[i];
        }

        $(".project-size").html(totalNumberOfBytes);
      }
    });

    if (myParam == "Paragraph-Utilities") {
      console.log("test");
      $(".project-info").append(
        `<h3 style="margin-top:10px;">Project Created From:</h3>
        <div class="row">
        <div class="col-sm-6">
          <div class="case">
            <div class="hovereffect">
              <img class='img-responsive over thumb' src="caseThumb.PNG" alt="caseThumb">
              <div class="overlay">
                <h2>Case</h2>
                <p>A website where one can change text from uppercase to lowercase and vice-versa.</p>
                <div class="tooltip"><img class='moreInfoPic' data-project='Case' src="moreInfo.png" alt="">
                  <span class="tooltiptext">Click for more info!</span>
                </div>

                <div class="tooltip"><a href="/case"><img class='webPic webPicCase' src="web.png" alt=""></a>
                  <span class="tooltiptext">Click to go to the website!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="paragraphUtilities-depreceated">
            <div class="hovereffect">
              <img class='img-responsive over thumb' src="paragraphUtilitiesDepreceatedThumb.PNG" alt="filePicParagraphUtilitiesDepreceatedThumb">
              <div class="overlay">
                <h2>Paragraph Utilities Depreceated</h2>
                <p>This website allows for users to find out information about their writing such as number of punctuation marks, sentences, and prepositions.</p>
                <div class="tooltip"><img class='filePic filePicParagraphUtilitiesDepreceated' src="file.png" alt="">
                  <span class="tooltiptext">Click to see the files!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>`
      );
    }
    else if (myParam == "Case") {
      $(".project-info").append(
        `<h3 style="margin-top:10px;">Project Created From:</h3>
        <div class="row">
        <div class="col-sm-12">
        <div class="lowercase">
          <div class="hovereffect">
            <img class='img-responsive over thumb' src="lowercaseThumb.PNG" alt="lowercaseThumb">
            <div class="overlay">
              <h2>Lowercase</h2>
              <p>This website makes anything you type in change to lowercase. This is useful for the people who turn on caps lock to capitalize the first word of a sentence and forget to turn it off.</p>
              <div class="tooltip"><img class='moreInfoPic' data-project='Lowercase' src="moreInfo.png" alt="">
                <span class="tooltiptext">Click for more info!</span>
              </div>

              <div class="tooltip"><img class='webPic webPicLowercase' src="web.png" alt="">
                <span class="tooltiptext">Click to go to the website!</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>`
      );
    }
  }

  $(".tooltip").on("click", ".moreInfoPic", function(e) {
    console.log("djdj")
    projectTitle = $(this).data("project");
    e.stopImmediatePropagation();
    acquiredProject = false;
    window.open(`/Project-Info?project=${projectTitle}`, "_self");
  });

  $(".tooltip").on("click", ".filePicParagraphUtilitiesDepreceated", function() {
    window.open("https://github.com/DavidG636/Paragraph-Utilities/tree/307ffc2b311a042a7414d6f6ed08aaac4b849e4b", "_blank");
  });

  $('.tooltip').on("click", ".webPicLowercase", function() {
    window.open('https://davidg636.github.io/Lowercase/', '_blank');
  });




  $(".envelopeLogo").hover(
    function() {
      $('.envelopeLogo').removeClass("fa-envelope");
      $('.envelopeLogo').addClass('fa-envelope-open');
    },
    function() {
      $('.envelopeLogo').removeClass("fa-envelope-open");
      $('.envelopeLogo').addClass('fa-envelope');
    }
  );
});
