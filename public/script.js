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

  $('.webPicCase').unbind().click(function() {
    window.open('https://davidg636.github.io/Case/', '_blank');
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

  $('.webPicLowercase').unbind().click(function() {
    window.open('https://davidg636.github.io/Lowercase/', '_blank');
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

  $('.gitPicPrimalityChecker').unbind().click(function() {
    window.open('https://github.com/DavidG636/Primality-Checker', '_blank');
  });

  $('.webPicPrimalityChecker').unbind().click(function() {
    window.open('https://davidg636.github.io/Primality-Checker/', '_blank');
  });

  $('.profilePic').unbind().click(function() {
    window.open('https://github.com/DavidG636', '_blank');
  });

  $('.profileName').unbind().click(function() {
    window.open('https://github.com/DavidG636', '_blank');
  });

  $('.gitPicPaceSeidenbergStemCamp2017').unbind().click(function() {
    window.open('https://github.com/DavidG636/Pace-Seidenberg-Stem-Camp-2017', '_blank');
  });

  $('.filePicPaceSeidenbergStemCamp2017').unbind().click(function() {
    window.open('https://github.com/DavidG636/Pace-Seidenberg-Stem-Camp-2017/blob/master/script.py', '_blank');
  });

  $('.gitPicTodayIWill').unbind().click(function() {
    window.open('https://github.com/DavidG636/Today-I-Will', '_blank');
  });

  $('.webPicTodayIWill').unbind().click(function() {
    window.open('https://davidg636.github.io/Today-I-Will/', '_blank');
  });

  $('.gitPicProjectAutomation').unbind().click(function() {
    window.open('https://github.com/DavidG636/Project-Automation', '_blank');
  });

  $('.filePicProjectAutomation').unbind().click(function() {
    window.open('https://github.com/DavidG636/Project-Automation/blob/master/createProject.bat', '_blank');
  });

  $('.gitPicComputerMode').unbind().click(function() {
    window.open('https://github.com/DavidG636/Computer-Mode', '_blank');
  });

  $('.filePicComputerMode').unbind().click(function() {
    window.open('https://github.com/DavidG636/Computer-Mode/blob/master/loadPreset.bat', '_blank');
  });

  $('.gitPicMoodMail').unbind().click(function() {
    window.open('https://github.com/DavidG636/Mood-Mail', '_blank');
  });

  $('.webPicMoodMail').unbind().click(function() {
    window.open('https://mood-mail.herokuapp.com', '_blank');
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
        this.isDeleting = true;
      } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.wordIndex++;
        speed = 500;
      }

      setTimeout(() => {
        this.type()
      }, speed);
    }
  }

  if (path == '/WhatAmI') {
    const element = $('.typewriter');
    const words = JSON.parse($(element).attr('data-words'));
    const wait = $(element).attr('data-wait');
    var creator = new Typewriter(element, words, wait);
  }

  $(".email").hover(
    function() {
      $('.envelopeLogo').removeClass( "fa-envelope" );
      $('.envelopeLogo').addClass('fa-envelope-open');
    },
    function() {
      $('.envelopeLogo').removeClass( "fa-envelope-open" );
      $('.envelopeLogo').addClass('fa-envelope');
    }
  );
});
