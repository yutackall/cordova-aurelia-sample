var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
      if(typeof device === 'undefined'){
        console.log("undefined");
        document.addEventListener('deviceready', this.onDeviceReady, false);
      }else{
        console.log(device);
        onDeviceReady();
      }
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
      if (id == 'deviceready') {
        var script = document.createElement('script');
        script.src = 'scripts/vendor-bundle.js';
        script.setAttribute('data-main',"aurelia-bootstrapper")
        script.type = 'text/javascript';
        document.getElementsByTagName('head').item(0).appendChild(script);
      }

      console.log('Received Event: ' + id);
    }
};

app.initialize();
