

    module.exports = {
        async function players() {
      
            const url = `https://www.footyrenders.com/page/${1}/?s=${"arsenal"}`;
            rp(encodeURI(url))
            .then(function(html){
              
              //success!
              console.log($('main > div > article > ul > li > div > a > img', html)[0].attribs['data-src'])
        
              for (let i = 0; i < 20; i++) {
                players = $('main > div > article > ul > li > div > a > img', html)[i].attribs['data-src'];
                array.push(players)
              }
              console.log(array);
              res.redirect("/fottyrender2")
            })
           
            .catch(function(err){
                res.redirect("/fottyrender2")
            });
            }
    }