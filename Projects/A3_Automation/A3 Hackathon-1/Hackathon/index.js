const requestPromise = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs'); 
const request = require('request');
const Json2csvParser = require('json2csv').Parser;

(async () => {
    let moviesData = [];
    for (let movie of urls){
       
    const response = await requestPromise({
        url : movie.url,
    });
    
    let $ = cheerio.load(response);
    
    let title = $('.TitleBlock__TitleContainer-sc-1nlhx7j-1.jxsVNt > h1').text(); 
    let rating = $('span[class="AggregateRatingButton__RatingScore-sc-1ll29m0-1 iTLWoV"]').text().slice(0, 3);
    let poster = $('div[class="ipc-media ipc-media--poster ipc-image-media-ratio--poster ipc-media--baseAlt ipc-media--poster-l ipc-poster__poster-image ipc-media__img"] > img').attr('src');
    let aggregateRating = $('div[class="AggregateRatingButton__TotalRatingAmount-sc-1ll29m0-3 jkCVKJ"]').text().split("K")[0] + "K";
    let releasingDate = $('#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > div > section > div > div.TitleMainBelowTheFoldGroup__TitleMainPrimaryGroup-sc-1vpywau-1.btXiqv.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.Episodes__CelPageSection-sc-2mr81l-1.iHlaVj.celwidget > div.Episodes__EpisodesContent-sc-2mr81l-0.fXHWgh > div.ipc-sub-grid.ipc-sub-grid--page-span-2.ipc-sub-grid--nowrap.EpisodeCardContainer__CardSubGrid-b6qkup-0.eIjjfE.episodes-card-container > div:nth-child(1) > div.ipc-list-card__content > div > div.EpisodeCard__EpisodeHeaderContent-sc-7fnqs3-4.biCfRQ > div.EpisodeCard__ReleaseDate-sc-7fnqs3-10.jtMAVD').text();
    let popularity = $('#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.Hero__MediaContentContainer__Video-kvkd64-2.kmTkgc > div.Hero__ContentContainer-kvkd64-10.eaUohq > div.Hero__MetaContainer__Video-kvkd64-4.kNqsIK > div.RatingBar__RatingContainer-sc-85l9wd-0.hNqCJh.Hero__HideableRatingBar-kvkd64-12.hBqmiS > div > div:nth-child(3) > a > div > div > div.TrendingButton__ContentWrap-bb3vt8-0.dJEFvu > div.TrendingButton__TrendingScore-bb3vt8-1.gfstID').text();
    let genres = [];
    $('div[class="ipc-chip-list GenresAndPlot__GenresChipList-cum89p-4 gtBDBL"] a[href^="/search/title?genres"] ')
    .each((i, elm) => { 
        let genre = $(elm).text();
        genres.push(genre); 
    });
    
    let movieDataObj = { 
        title : title,
        rating : rating,
        aggregateRating : aggregateRating,
        releasingDate : releasingDate,
        popularity : popularity,
        genres : JSON.stringify(genres),
        poster : poster,
    };

    moviesData.push(movieDataObj); 

  }
  const json2csvParser = new Json2csvParser({});
  const csv = json2csvParser.parse(moviesData);
  fs.writeFileSync('data.csv', csv, 'utf-8');
})();


const urls  = [
    {
        url : 'https://www.imdb.com/title/tt12714854/?ref_=hm_fanfav_tt_i_4_pd_fp1',
        id : 'Mumbai Diaries'
    },
    {
        url : 'https://www.imdb.com/title/tt6334354/?ref_=hm_fanfav_tt_i_3_pd_fp1',
        id : 'The Suicide Squad'
    },
    {
        url : `https://www.imdb.com/title/tt14479078/?ref_=hm_tpks_tt_t_1_pd_tp1_cp`,
        id : 'Candy'
    },
    {
        url : 'https://www.imdb.com/title/tt9376612/?ref_=watch_fanfav_tt_t_1',
        id : "Shang-Chi and the Legend of the Ten Rings"
    },
    { 
        url : "https://www.imdb.com/title/tt1160419/?ref_=watch_fanfav_tt_i_2",
        id : "Dune"
    },
    {
        url : "https://www.imdb.com/title/tt3228774/?ref_=watch_fanfav_tt_i_4",
        id : "Cruella"
    },
    {
        url : "https://www.imdb.com/title/tt6468322/?ref_=watch_fanfav_tt_i_5",
        id : "Money Heist"
    },
    {
        url : "https://www.imdb.com/title/tt10322274/?ref_=watch_fanfav_tt_i_6",
        id : "Schumacher"
    }
];

/*
    fs.writeFileSync('data.json', JSON.stringify(moviesData), 'utf-8');    

    let file = fs.createWriteStream("./posters/" + `${movie.id}.jpg`);
    
    let stream = request({
         url : poster
    }).pipe(file);
*/ 