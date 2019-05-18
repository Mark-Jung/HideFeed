var quote = "";
var author = "";


function replace() {
  var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
  var x = document.getElementsByClassName("_2pie");
  var html = `<div>
                <p
                  style="
                    text-align:center;
                    vertical-align:middle;
                    text-shadow:2px 2px 3px rgba(150,150,150,0.75);
                    font-size: 40px;
                    padding:2% 15% 0 15%;
                  ">
                  ${quote}
                </p>
                <p
                  style="
                    text-align:center;
                    text-shadow:2px 2px 3px rgba(150,150,150,0.75);
                    font-size: 30px;
                  ">
                  -${author}
                </p>
              </div>`;
  x[0].innerHTML = html;

  // this also hides the friends activities
  // feed.children().remove();
  // $('.ticker_stream').remove();
  // $('.ego_column').remove();
  // $('#pagelet_games_rhc').remove();
  // $('#pagelet_trending_tags_and_topics').remove();
  // $('#pagelet_canvas_nav_content').remove();
}

function fetch_quote() {
  const url = "";
  fetch("https://talaikis.com/api/quotes/random/")
  .then(function(data) {
    let res = data.json();
    res.then(function(result) {
      quote = result.quote;
      author = result.author;
    })
  })
  .catch(function(error) {
    console.log(error);
  });
};


fetch_quote();
window.setInterval(replace, 90);
