//var Vue = require('vue');
//var firebase = require('firebase');
//var VueFire = require('vuefire')
//Vue.use(VueFire)

// Setup Firebase
var config = {
    apiKey: "AIzaSyDRAxrzSy9VHAHFCyowFUcDcWPLM1a8Tic",
    authDomain: "library-41e3f.firebaseapp.com",
    databaseURL: "https://library-41e3f.firebaseio.com",
    projectId: "library-41e3f",
    storageBucket: "library-41e3f.appspot.com",
    messagingSenderId: "311887998550"
}
firebase.initializeApp(config);

var db = firebase.database();

var app = new Vue({
  el: '#app',
  methods: {
    placeHold: function(e, i) {
       var name = this.$options.data().books[i].name;
        window.location.href = 'hold.html?book=' + name;
    }
  },
  firebase: function () {
    return {
      books: db.ref('books')
    }
  },
  data: {
    message: 'Welcome to Naz Library',
    /*books: [
        {
            img: 'imgs/books/b1.jpg',
            name: 'Secrets of the JavaScript Ninja',
            author: 'John Resig, Bear Bibeault',
            published: '2013',
            url: 'https://www.manning.com/books/secrets-of-the-javascript-ninja',
            summary: 'Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript '
        },
        {
            img: 'imgs/books/b2.jpg',
            name: 'Deep Learning',
            author: 'Ian Goodfellow, Yoshua Bengio',
            published: '2016',
            url: 'https://books.google.com/books/about/Deep_Learning.html?id=Np9SDQAAQBAJ&printsec=frontcover&source=kp_read_button#v=onepage&q&f=false',
            summary: '"Written by three experts in the field, Deep Learning is the only comprehensive book on the subject." -- Elon Musk, '
        },
        {
            img: 'imgs/books/b3.jpg',
            name: 'Introduction to Algorithms',
            author: ' Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein',
            published: '1990',
            url: 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844',
            summary: 'Introduction to Algorithms is a book by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein'
        },
        {
            img: 'imgs/books/b4.jpeg',
            name: 'Programming Collective Intelligence',
            author: 'Toby Segaran',
            published: '2007',
            url: 'https://www.amazon.com/Programming-Collective-Intelligence-Building-Applications/dp/0596529325/ref=sr_1_1?s=books&ie=UTF8&qid=1497052175&sr=1-1&keywords=Programming+Collective+Intelligence',
            summary: 'Programming Collective Intelligence is a book by Toby Segaran and published by O\'Reilly Media in August, 2007. It covers the use of data-mining and machine learning algorithms applied to online behavior and user-generated content'
        },
        {
            img: 'imgs/books/b5.jpeg',
            name: 'Lean In: Women, Work, and the Will to Lead',
            author: 'Sheryl Sandberg, Nell Scovell',
            published: '2013',
            url: 'https://www.amazon.com/Lean-Women-Work-Will-Lead/dp/0385349947/ref=sr_1_1?s=books&ie=UTF8&qid=1497052195&sr=1-1&keywords=Lean+In%3A+Women%2C+Work%2C+and+the+Will+to+Lead',
            summary: 'Lean In: Women, Work, and the Will to Lead is a 2013 book written by Sheryl Sandberg, the chief operating officer of Facebook, and Nell Scovell, TV and magazine writer.'
        },
        {
            img: 'imgs/books/b6.jpg',
            name: 'Modern Operating Systems',
            author: ' Andrew S. Tanenbaum ',
            published: '2014',
            url:'https://www.amazon.com/Modern-Operating-Systems-Andrew-Tanenbaum/dp/013359162X/ref=sr_1_1?s=books&ie=UTF8&qid=1497052220&sr=1-1&keywords=Modern+Operating+Systems',
            summary: 'Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript '
        },
        {
            img: 'imgs/books/b7.jpeg',
            name: 'Statistical Analysis: An Interdisciplinary Introduction to Univariate & Multivariate Methods',
            author: 'Sam Kash Kachigan',
            published: '1986',
            url: 'https://www.amazon.com/Statistical-Analysis-Interdisciplinary-Introduction-Multivariate/dp/0942154991/ref=sr_1_1?s=books&ie=UTF8&qid=1497052244&sr=1-1&keywords=Statistical+Analysis%3A+An+Interdisciplinary+Introduction+to+Univariate+%26+Multivariate+Methods',
            summary: 'This classic book provides the much needed conceptual explanations of advanced computer-based multivariate data analysis techniques: correlation and regression analysis, factor analysis and discrimination.'
        },
        {
            img: 'imgs/books/b8.jpeg',
            name: 'Zero to One',
            author: 'Peter Thiel, Blake Masters',
            published: '2014',
            url: 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296/ref=sr_1_1?s=books&ie=UTF8&qid=1497052267&sr=1-1&keywords=Zero+to+One',
            summary: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters.'
        },
        {
            img: 'imgs/books/b9.jpeg',
            name: 'Probability Theory: The Logic of Science',
            author: 'Edwin Thompson Jaynes',
            published: '2003',
            url: 'https://www.amazon.com/Probability-Theory-E-T-Jaynes/dp/0521592712/ref=sr_1_1?s=books&ie=UTF8&qid=1497052285&sr=1-1&keywords=Probability+Theory%3A+The+Logic+of+Science',
            summary: 'The standard rules of probability can be interpreted as uniquely valid principles in logic. In this book, E. T. Jaynes dispels the imaginary distinction between \'probability theory\' and \'statistical inference\', leaving a logical unity and simplicity, which provides greater technical power and flexibility in applications.'
        }
    ]*/
  }
});