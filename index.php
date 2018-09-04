<!doctype html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="components/Nav/Nav.css">
    <link rel="stylesheet" href="components/Intro/Intro.css">

    <title>CoinCollect</title>

    <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i');

      body {
        font-family: 'Source Sans Pro', sans-serif;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
      }
      .max-width {
        width: 1200px;
        max-width: 100%;
        margin: 0 auto;
      }
      .flex {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      @media(min-width: 680px) {
        .flex {
          flex-wrap: nowrap;
        }
      }
      .margin-right {
        margin-right: 20px;
      }
      a.button {
        font-size: 18px;
        font-weight: bold;
        height: 45px;
        line-height: 45px;
        padding: 0 50px;
        color: #fff;
        display: inline-block;
        vertical-align: middle;
        border-radius: 5px;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
      }
      a.button.blue {
        background-color: #2aa6f6;
      }
      a.button.gold {
        color: #333333;
        background: #ffe900;
        background: -moz-linear-gradient(-45deg, #ffe900 0%, #ffb500 100%);
        background: -webkit-linear-gradient(-45deg, #ffe900 0%,#ffb500 100%);
        background: linear-gradient(135deg, #ffe900 0%,#ffb500 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe900', endColorstr='#ffb500',GradientType=1 );
      }
      a.button.white {
        color: #333333;
        background-color: white;
      }
      @media(min-width: 680px) {
        footer {
          display: none;
        }
      }
    </style>

  </head>
  <body>

    <?php
    include('components/Nav/Nav.html');
    include('components/Intro/Intro.html');
    ?>

    <footer>
      <div class="logo-wrap" style="margin: 20px 0; text-align: center">
        <img src="https://i.imgur.com/7vlG3YE.png" alt="CoinCollect logo" />
      </div>
    </footer>

    <img src="pre-pro/design/landing.png" hidden />

  </body>
</html>
