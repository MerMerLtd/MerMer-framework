const path = require('path');
const dvalue = require('dvalue');
const Bot = require(path.resolve(__dirname, 'Bot.js'));

class FindCafeca extends Bot {
    constructor() {
      super();
      this.name = 'FindCafeca';
    }

    init({ config, database, logger, i18n }) {
      return super.init({ config, database, logger, i18n })
      .then(() => this);
    }
    
    start() {
      return super.start();
    }

    getQuestions() {
      let questions = [
        { questionID: 'Q00001', content: '今天是個晴朗的好天氣', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00002', content: '今天是個涼爽的好天氣', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00003', content: '咖啡不苦，人生才苦', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00004', content: '想點一杯微笑，全糖', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00005', content: '需要一個擁抱，去冰', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00006', content: '聽見一個故事，微酸', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00007', content: '我每天早上都很想睡', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00008', content: '為別人做過瘋狂的事情', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00009', content: '為去年的自己感到尷尬', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' },
        { questionID: 'Q00010', content: '喜歡早起', img: 'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg' }
      ];
      const result = dvalue.randomPick(questions, 3);
      return Promise.resolve(result);  
    }

    getSuggestion() {
      let suggestions = [
        { product: '綠帽子', store: '三%比率咖啡', storeID: 'TW00001', img: 'http://solafood.vn/wp-content/uploads/2016/06/Solafood-10-loi-ich-tuyet-voi-cua-cafe-nguyen-chat-doi-voi-suc-khoe.jpg' },
        { product: '幸福', store: '三%比率咖啡', storeID: 'TW00001', img: 'http://solafood.vn/wp-content/uploads/2016/06/Solafood-10-loi-ich-tuyet-voi-cua-cafe-nguyen-chat-doi-voi-suc-khoe.jpg' },
        { product: '聖誕鈴聲', store: '三%比率咖啡', storeID: 'TW00001', img: 'http://solafood.vn/wp-content/uploads/2016/06/Solafood-10-loi-ich-tuyet-voi-cua-cafe-nguyen-chat-doi-voi-suc-khoe.jpg' },
        { product: '底家蛋', store: 'Stoppage Time', storeID: 'TW00004', img: 'http://solafood.vn/wp-content/uploads/2016/06/Solafood-10-loi-ich-tuyet-voi-cua-cafe-nguyen-chat-doi-voi-suc-khoe.jpg' }
      ];
      const result = dvalue.randomPick(suggestions, 1)[0];
      return Promise.resolve(result);
    }

    getStore({ params }) {
      let store = [
        { storeID: 'TW00001', store: '三%比率咖啡', description: '比率咖啡介紹文字', address: '', position: [20, 125], img: 'http://img.47life.tw/uploads/20180214233733_39.jpg' },
        { storeID: 'TW00004', store: 'Stoppage Time', description: '補時咖啡介紹文字', address: '', position: [20, 125], img: 'http://cdn.walkerland.com.tw/images/upload/poi/p49538/m55965/6198ff18e59629e2b0a3cbed16f7a4c9bce870c8.jpg' }
      ];
      const storeID = params.storeID;
      const result = store.find((v) => new RegExp(v.storeID,'i').test(storeID));
      return Promise.resolve(result);
    }
}

module.exports = FindCafeca;