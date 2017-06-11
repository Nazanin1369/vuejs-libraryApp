//var Vue = require('vue');

var hold = new Vue({
  el: '#hold',
  methods: {
    submitHold: function() {
        $.post( "/service/placeHold", function( data ) {
            alert( data );
        });
    }
  },
  data: function () {
    return {
        bookName: new URL(window.location.href).searchParams.get('book')
    }
  }
})