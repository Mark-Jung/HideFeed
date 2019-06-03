var quote = "";
var author = "";
var pic = "";


function replace() {
  var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
  var x = document.getElementsByClassName("_2pie");
  var html =  `<div style="position: relative;text-align: center;color: white;">
                <img src="${pic}" alt="cute cat" style="width:100%;height:100%;"/>
                <div style="position: absolute;bottom: 8px;right: 16px;">
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
                </div>
              </div>`;
             
  x[0].innerHTML = html;

}

function fetch_quote() {
  const url = "https://protected-brook-60597.herokuapp.com/quote/qod";
  fetch(url)
  .then(function(data) {
    let res = data.json();
    res.then(function(result) {
      quote = result['response']['quote'];
      author = result['response']['author'];
      pic = result['response']['pic']
    })
  })
  .catch(function(error) {
    console.log(error);
  });
};


fetch_quote();
window.setInterval(replace, 90);
