$(function() {
  var path = window.location.pathname;
  path = new String(path);
  const urlParams = new URLSearchParams(window.location.search);

  $('.gitPicCase').unbind().click(function() {
    window.open('https://github.com/DavidG636/Case', '_blank');
  });

  $('.gitPicParagraphUtilities').unbind().click(function() {
    window.open('https://github.com/DavidG636/Paragraph-Utilities', '_blank');
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
    window.open('https://davidg1739.github.io/', '_parent ');
  });

  $(".contactLink").hover(() => {
    $(".contactLink").removeClass("fa-envelope");
    $(".contactLink").addClass("fa-envelope-open");
  }, () => {
    $(".contactLink").removeClass("fa-envelope-open");
    $(".contactLink").addClass("fa-envelope");
  });

  class Typewriter {
    constructor(element, words, wait = 500) {
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
  } else if (path == '/ParagraphUtilities/Paragraph-Info') {
    var charsCheck = /^[A-Za-z1-99999]+$/;
    var prepositions = new Array("a", "abaft", "aboard", "about", "above", "absent", "across", "afore", "after", "against", "along", "alongside", "amid", "amidst", "among", "amongst", "an", "apropos", "apud", "around", "as", "aside", "astride", "at", "athwart", "atop", "barring", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "circa", "concerning", "despite", "down", "during", "except", "excluding", "failing", "following", "for", "from", "given", "in", "including", "inside", "into", "lest", "like", "mid", "midst", "minus", "modulo", "near", "next", "notwithstanding", "of", "off", "on", "onto", "opposite", "out", "outside", "over", "pace", "past", "per", "plus", "pro", "qua", "regarding", "round", "sans", "save", "since", "than", "through", "throughout", "till", "times", "to", "toward", "towards", "under", "underneath", "unlike", "until", "unto", "up", "upon", "versus", "vs.", "via", "vice", "with", "within", "without", "worth", "according", "ahead", "apart", "regards", "back", "because", "close", "due", "far", "instead", "left", "owing", "prior", "pursuant", "rather", "regardless", "right", "subsequent", "thanks", "that", "where", "long",  "opposed",  "soon",  "well");
    var words;
    var numOfWords = 0;
    var sentenceCount = 0;
    var punctuationCount = 0;
    var punctuation = ['?', '.', '!', ',', ';', ':', '"', "'", '-'];
    var punctuationLength = punctuation.length;
    var prepositionCount = 0;

      function getUserInput() {
          let userInput = $('.para-paragraphUtilities').val();
          userInput = userInput.toString();
          return userInput;
      }

      $('.eraseBtn-paragraphUtilities').click(function() {
          $('.para-paragraphUtilities').val('');
          $('.para-paragraphUtilities').keyup();
      });

      $('.printBtn-paragraphUtilities').click(function() {
          window.print();
      });

      $('.para-paragraphUtilities').keyup(function() {
          var userInput = getUserInput();
          var charCountWithWhitespace = 0;
          var charCountWithoutWhitespace = userInput.length;
          prepositionCount = 0;
          sentenceCount = 0;
          punctuationCount = 0;

          if (userInput[0] == undefined) {
            sentenceCount = 0;
            punctuationCount = 0;
            charCountWithWhitespace = 0;
            charCountWithoutWhitespace = 0;
            prepositionCount = 0;
            numOfWords = 0;
          }
          else if (userInput[0].match(charsCheck) || userInput[1].match(charsCheck)) {
              console.log(charCountWithoutWhitespace);
              for (let i = 0; i <= charCountWithoutWhitespace; i++) {
                  if (userInput[i] == '.' || userInput[i] == '!' || userInput[i] == '?') {
                      sentenceCount += 1;
                      console.log(sentenceCount);
                  }

                  for (let a = 0; a < punctuationLength; a++) {
                      if (userInput[i] == punctuation[a]) {
                          punctuationCount += 1;
                      }
                  }
              }

              $('.sentenceNum-paragraphUtilities').html(sentenceCount);
              userInput = userInput.toLowerCase();
              words = userInput.split(' ');

              numOfWords = userInput.split(' ').length;

              for (let b = 0; b <= numOfWords; b++) {
                  for (let r = 0; r < prepositions.length; r++) {
                      if (words[b] == prepositions[r]) {
                          prepositionCount += 1;
                      }
                  }
              }
              let numOfSpaces = 0;
              for (let j = 0; j <= charCountWithoutWhitespace; j++) {
                  if (userInput[j] == " ") {
                      numOfSpaces += 1;
                  }
              }
              charCountWithoutWhitespace = (charCountWithoutWhitespace - numOfSpaces);
              charCountWithWhitespace = (charCountWithoutWhitespace + numOfSpaces);
          }
          $('#wordCount-paragraphUtilities').html(numOfWords);
          $('#characterCountWithWhitespace-paragraphUtilities').html(charCountWithWhitespace);
          $('#punctutationMarks-paragraphUtilities').html(punctuationCount);
          $('#characterCountWithoutWhitespace-paragraphUtilities').html(charCountWithoutWhitespace);
          $('#preposition-paragraphUtilities').html(prepositionCount);
      });
  } else if (path == "/ParagraphUtilities/Case") {
    var state;
    var change;
    $(".submitText-paragraphUtilities").click(function() {
      state = $('.slider-paragraphUtilities').css('background-color');
      state = new String(state);

      let textContent = $('#text-paragraphUtilities').val();
      var changedText;

      if (state == 'rgb(42, 185, 52)') {
        change = 'capital';
      } else if (state == "rgb(202, 34, 34)") {
        change = 'lower';
      }

      if (change == 'capital') {
        changedText = textContent.toUpperCase();
        $('#text-paragraphUtilities').val(changedText)

      } else if (change == 'lower') {
        changedText = textContent.toLowerCase();
        $('#text-paragraphUtilities').val(changedText)
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

    var paraProjectsAppended = false

    if (myParam == "Paragraph-Utilities") {
      if (paraProjectsAppended == false) {
        if ($(".paragraphUtilities-depreceated").length != 1) {
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
      }
    }
    if (myParam == "Case") {
      if ($(".webPicLowercase").length != 1) {
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
  }
  else if (path == "/contact") {
    var mySubmissionParam = urlParams.get('submitted');

    if (mySubmissionParam == "submitted") {
      $(".contactFormInnerDiv").css("display", "none");
      $(".contactFormSubmissionDiv").css("display", "block");
    }
    else if (mySubmissionParam == "profanity") {
      $(".contactFormInnerDiv").css("display", "none");
      $(".contactFormProfanitySubmissionDiv").css("display", "block");
    }
    else if (mySubmissionParam == "empty") {
      $(".contactFormInnerDiv").css("display", "none");
      $(".contactFormEmptySubmissionDiv").css("display", "block");
    }
    else if (mySubmissionParam == "blacklistedEmail") {
      $(".contactFormInnerDiv").css("display", "none");
      $(".contactFormBlacklistedEmailSubmissionDiv").css("display", "block");
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
